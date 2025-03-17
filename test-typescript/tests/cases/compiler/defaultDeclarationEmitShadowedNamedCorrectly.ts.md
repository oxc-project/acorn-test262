__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 444,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "\"./this\"",
        "value": "./this"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 37,
        "end": 83,
        "body": {
          "type": "TSInterfaceBody",
          "start": 60,
          "end": 83,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 66,
              "end": 71,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 67,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 76,
              "end": 81,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 53,
          "decorators": [],
          "name": "Things",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 53,
          "end": 59,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 54,
              "end": 55,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 57,
              "end": 58,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
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
      "start": 84,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 91,
        "end": 192,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 165,
          "end": 192,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 171,
              "end": 190,
              "argument": {
                "type": "TSAsExpression",
                "start": 178,
                "end": 189,
                "expression": {
                  "type": "Literal",
                  "start": 178,
                  "end": 182,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 186,
                  "end": 189
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
          "start": 100,
          "end": 104,
          "decorators": [],
          "name": "make",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 114,
            "end": 146,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 117,
                "end": 146,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 119,
                    "end": 144,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 125,
                      "end": 144,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 127,
                        "end": 144,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 127,
                            "end": 131,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 131,
                              "decorators": [],
                              "name": "CTor",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 134,
                            "end": 144,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 135,
                                "end": 143,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 135,
                                  "end": 140,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 140,
                                  "end": 143,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 142,
                                    "end": 143,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 142,
                                      "end": 143,
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 147,
          "end": 164,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 164,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 155,
              "end": 164,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 157,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 163,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 163,
                    "decorators": [],
                    "name": "CTor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 155,
              "decorators": [],
              "name": "Things",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 104,
          "end": 113,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 105,
              "end": 106,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 108,
              "end": 112,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 112,
                "decorators": [],
                "name": "CTor",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 194,
      "end": 220,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 201,
        "end": 220,
        "body": {
          "type": "TSInterfaceBody",
          "start": 217,
          "end": 220,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 211,
          "end": 216,
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 222,
      "end": 276,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 237,
        "end": 276,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 255,
          "end": 276,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 261,
              "end": 274,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 266,
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
                "start": 266,
                "end": 273,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 268,
                  "end": 273,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 273,
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
          "start": 243,
          "end": 254,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 444,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 284,
        "end": 444,
        "body": {
          "type": "TSModuleBlock",
          "start": 304,
          "end": 444,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 310,
              "end": 330,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 314,
                  "end": 329,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 325,
                    "decorators": [],
                    "name": "MyComponent",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 328,
                    "end": 329,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 403,
              "end": 442,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 410,
                "end": 442,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 416,
                    "end": 441,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 422,
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 425,
                      "end": 441,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 430,
                          "end": 440,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 430,
                            "end": 432,
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 433,
                            "end": 440,
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 429,
                        "decorators": [],
                        "name": "make",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
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
          "start": 294,
          "end": 303,
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
