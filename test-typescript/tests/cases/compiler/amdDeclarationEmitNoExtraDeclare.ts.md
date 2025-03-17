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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "name": "Configurable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "name": "Configurable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 45,
        "value": "./Configurable",
        "raw": "\"./Configurable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 54,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 71,
          "name": "HiddenClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 72,
          "end": 74,
          "body": []
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
      "start": 76,
      "end": 137,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 83,
        "end": 137,
        "id": {
          "type": "Identifier",
          "start": 89,
          "end": 100,
          "name": "ActualClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 109,
          "end": 134,
          "callee": {
            "type": "Identifier",
            "start": 109,
            "end": 121,
            "name": "Configurable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 122,
              "end": 133,
              "name": "HiddenClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 135,
          "end": 137,
          "body": []
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
  "end": 250,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 60,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 60,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 39,
                  "end": 53,
                  "argument": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 46,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 249,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 68,
        "end": 249,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 89,
          "name": "Configurable",
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
            "start": 117,
            "end": 124,
            "name": "base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "T",
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
                "id": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "name": "base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 161,
                  "end": 246,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 172,
                      "end": 239,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 183,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 183,
                        "end": 239,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 184,
                            "end": 198,
                            "argument": {
                              "type": "Identifier",
                              "start": 187,
                              "end": 191,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 200,
                          "end": 239,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 214,
                              "end": 229,
                              "expression": {
                                "type": "CallExpression",
                                "start": 214,
                                "end": 228,
                                "callee": {
                                  "type": "Super",
                                  "start": 214,
                                  "end": 219
                                },
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 220,
                                    "end": 227,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 223,
                                      "end": 227,
                                      "name": "args",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
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
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 89,
          "end": 116,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 90,
              "end": 115,
              "name": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 111,
                  "name": "Constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 128,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 127,
            "end": 128,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "T",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
