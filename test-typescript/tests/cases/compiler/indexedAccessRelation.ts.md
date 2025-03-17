__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 276,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 55,
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 96,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 92,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 92,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 86,
                        "end": 92,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 87,
                            "end": 88,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 90,
                            "end": 91,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 55,
                "end": 74,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 73,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 66,
                      "end": 73,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 73,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 37,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 140,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 107,
        "end": 140,
        "body": {
          "type": "TSInterfaceBody",
          "start": 126,
          "end": 140,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 132,
              "end": 138,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 136,
                  "end": 137,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
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
          "start": 117,
          "end": 122,
          "decorators": [],
          "name": "State",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 122,
          "end": 125,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 123,
              "end": 124,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
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
      "type": "ClassDeclaration",
      "start": 142,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 154,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 275,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 275,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 273,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 273,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 273,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 243,
                    "end": 267,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 243,
                      "end": 266,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 257,
                          "end": 265,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 259,
                              "end": 263,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 262,
                                "end": 263,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 243,
                        "end": 256,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 256,
                          "decorators": [],
                          "name": "setState",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 231,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
                        "decorators": [],
                        "name": "T",
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
        "start": 162,
        "end": 166,
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 202,
        "end": 216,
        "params": [
          {
            "type": "TSIntersectionType",
            "start": 203,
            "end": 215,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 203,
                "end": 204,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 207,
                "end": 215,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 212,
                  "end": 215,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 213,
                      "end": 214,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 212,
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 180,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 183,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
