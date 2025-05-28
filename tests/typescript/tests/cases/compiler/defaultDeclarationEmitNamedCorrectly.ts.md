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
          "decorators": [],
          "name": "Things",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "make",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "CTor",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 84,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                              "decorators": [],
                              "name": "CTor",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null
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
            }
          }
        ],
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
              "decorators": [],
              "name": "Things",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "CTor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 192,
      "end": 285,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 207,
        "end": 285,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 213,
          "end": 224,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 225,
          "end": 285,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 231,
              "end": 244,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 249,
              "end": 283,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 262,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 265,
                "end": 282,
                "callee": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 269,
                  "decorators": [],
                  "name": "make",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 270,
                    "end": 281,
                    "decorators": [],
                    "name": "MyComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
