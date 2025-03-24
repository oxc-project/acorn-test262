__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "name": "Things",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 25,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 30,
          "end": 53,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 36,
              "end": 41,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 39,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 46,
              "end": 51,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 49,
                  "end": 50,
                  "typeName": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
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
      "start": 54,
      "end": 162,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 61,
        "end": 162,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "name": "make",
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
            "start": 84,
            "end": 116,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 87,
                "end": 116,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 89,
                    "end": 114,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 97,
                        "end": 114,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 97,
                            "end": 101,
                            "typeName": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 101,
                              "name": "CTor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 104,
                            "end": 114,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 105,
                                "end": 113,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 105,
                                  "end": 110,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 110,
                                  "end": 113,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 112,
                                    "end": 113,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 112,
                                      "end": 113,
                                      "name": "P",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 135,
          "end": 162,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 141,
              "end": 160,
              "argument": {
                "type": "TSAsExpression",
                "start": 148,
                "end": 159,
                "expression": {
                  "type": "Literal",
                  "start": 148,
                  "end": 152,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 156,
                  "end": 159
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 74,
          "end": 83,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 75,
              "end": 76,
              "name": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 78,
              "end": 82,
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 82,
                "name": "CTor",
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 117,
          "end": 134,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 119,
            "end": 134,
            "typeName": {
              "type": "Identifier",
              "start": 119,
              "end": 125,
              "name": "Things",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 125,
              "end": 134,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 127,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 133,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "name": "CTor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 164,
      "end": 190,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 171,
        "end": 190,
        "id": {
          "type": "Identifier",
          "start": 181,
          "end": 186,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 187,
          "end": 190,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 192,
      "end": 285,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 207,
        "end": 285,
        "id": {
          "type": "Identifier",
          "start": 213,
          "end": 224,
          "name": "MyComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 225,
          "end": 285,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 231,
              "end": 244,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
                    "name": "Props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 249,
              "end": 283,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 262,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "CallExpression",
                "start": 265,
                "end": 282,
                "callee": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 269,
                  "name": "make",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 270,
                    "end": 281,
                    "name": "MyComponent",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
