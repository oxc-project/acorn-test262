thisBinding.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 202,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 202,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 45,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 45,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 37,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 200,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 58,
              "end": 200,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 66,
                "end": 200,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 69,
                    "end": 80,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 79,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 82,
                    "end": 137,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 83,
                      "end": 137,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 89,
                        "end": 137,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 96,
                            "end": 100,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 96,
                              "end": 99,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 96,
                                "end": 97,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "decorators": [],
                                "name": "e",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 122,
                            "end": 126,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 122,
                              "end": 125,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 123,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "decorators": [],
                                "name": "z",
                                "optional": false
                              }
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
                          "start": 84,
                          "end": 87,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 85,
                            "end": 87,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 86,
                              "end": 87,
                              "typeName": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 87,
                                "decorators": [],
                                "name": "I",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 142,
                    "end": 194,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
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
                      "start": 153,
                      "end": 194,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 156,
                        "end": 194,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 159,
                            "end": 188,
                            "expression": {
                              "type": "CallExpression",
                              "start": 159,
                              "end": 187,
                              "arguments": [
                                {
                                  "type": "TSTypeAssertion",
                                  "start": 179,
                                  "end": 186,
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "start": 183,
                                    "end": 185,
                                    "properties": []
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 180,
                                    "end": 181,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 181,
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 159,
                                "end": 178,
                                "computed": false,
                                "object": {
                                  "type": "ObjectExpression",
                                  "start": 160,
                                  "end": 175,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 161,
                                      "end": 165,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 161,
                                        "end": 162,
                                        "decorators": [],
                                        "name": "z",
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "Literal",
                                        "start": 163,
                                        "end": 165,
                                        "raw": "10",
                                        "value": 10
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 166,
                                      "end": 174,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 166,
                                        "end": 167,
                                        "decorators": [],
                                        "name": "f",
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 168,
                                        "end": 174,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 168,
                                          "end": 172
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 173,
                                          "end": 174,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ]
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 177,
                                  "end": 178,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 218,
            "end": 238,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 219,
              "end": 238,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 238,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 220,
                  "end": 229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 229,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 223,
                      "end": 229
                    }
                  }
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
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
