__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 45,
        "raw": "\"./Configurable\"",
        "value": "./Configurable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 54,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 72,
          "end": 74,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 71,
          "decorators": [],
          "name": "HiddenClass",
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
      "start": 76,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 83,
        "end": 137,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 135,
          "end": 137,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 89,
          "end": 100,
          "decorators": [],
          "name": "ActualClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 109,
          "end": 134,
          "arguments": [
            {
              "type": "Identifier",
              "start": 122,
              "end": 133,
              "decorators": [],
              "name": "HiddenClass",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 109,
            "end": 121,
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 60,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 60,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 29,
          "end": 60,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 35,
              "end": 58,
              "params": [
                {
                  "type": "RestElement",
                  "start": 39,
                  "end": 53,
                  "argument": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 46,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 48,
                      "end": 53,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 48,
                        "end": 51
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 56,
                  "end": 57,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 26,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 25,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 249,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 68,
        "end": 249,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 129,
          "end": 249,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 135,
              "end": 247,
              "argument": {
                "type": "ClassExpression",
                "start": 142,
                "end": 246,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 161,
                  "end": 246,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 172,
                      "end": 239,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 183,
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
                        "start": 183,
                        "end": 239,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 200,
                          "end": 239,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 214,
                              "end": 229,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 214,
                                "end": 228,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 220,
                                    "end": 227,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 223,
                                      "end": 227,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Super",
                                  "start": 214,
                                  "end": 219
                                },
                                "optional": false,
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
                            "type": "RestElement",
                            "start": 184,
                            "end": 198,
                            "argument": {
                              "type": "Identifier",
                              "start": 187,
                              "end": 191,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 191,
                              "end": 198,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 193,
                                "end": 198,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 193,
                                  "end": 196
                                }
                              }
                            },
                            "value": null
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
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 89,
          "decorators": [],
          "name": "Configurable",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 128,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 127,
            "end": 128,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 89,
          "end": 116,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 90,
              "end": 115,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 115,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 111,
                  "end": 115,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 112,
                      "end": 114,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 111,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "T",
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
