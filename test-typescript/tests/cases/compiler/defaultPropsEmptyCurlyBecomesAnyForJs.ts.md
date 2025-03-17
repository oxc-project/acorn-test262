__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 101,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 33,
          "end": 101,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 48,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 47,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 62,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "decorators": [],
                "name": "state",
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
                "end": 61,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 67,
              "end": 99,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 78,
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
                "type": "TSEmptyBodyFunctionExpression",
                "start": 78,
                "end": 99,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 79,
                    "end": 87,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 86,
                        "end": 87,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 89,
                    "end": 97,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 97,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "U",
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 16,
          "end": 32,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 17,
              "end": 23,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 23,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 31,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 29,
                "end": 31,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 35,
        "raw": "\"./component\"",
        "value": "./component"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "MyFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "MyFoo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 252,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 44,
        "end": 252,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 73,
          "end": 252,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 79,
              "end": 250,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 90,
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
                "start": 90,
                "end": 250,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 93,
                  "end": 250,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 103,
                      "end": 153,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 103,
                        "end": 152,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 109,
                            "end": 129,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 110,
                                "end": 121,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 111,
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
                                  "start": 113,
                                  "end": 121,
                                  "raw": "\"string\"",
                                  "value": "string"
                                }
                              },
                              {
                                "type": "Property",
                                "start": 123,
                                "end": 128,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 124,
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
                                  "start": 126,
                                  "end": 128,
                                  "raw": "42",
                                  "value": 42
                                }
                              }
                            ]
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 131,
                            "end": 151,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 133,
                                "end": 149,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 138,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 149,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "Super",
                          "start": 103,
                          "end": 108
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 162,
                      "end": 175,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 174,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 162,
                          "end": 172,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 162,
                            "end": 166
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 172,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 197,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 184,
                        "end": 196,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 184,
                          "end": 194,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 184,
                            "end": 188
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 194,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 206,
                      "end": 223,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 206,
                        "end": 222,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 206,
                          "end": 216,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 206,
                            "end": 210
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 216,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 222,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 232,
                      "end": 244,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 243,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 232,
                          "end": 236
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 243,
                          "decorators": [],
                          "name": "member",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
          "start": 50,
          "end": 58,
          "decorators": [],
          "name": "TypedFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 67,
          "end": 72,
          "decorators": [],
          "name": "MyFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
