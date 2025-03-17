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
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 37,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 55,
              "name": "setState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 96,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 92,
                  "name": "state",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 86,
                        "end": 92,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 87,
                            "end": 88,
                            "typeName": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 90,
                            "end": 91,
                            "typeName": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 96,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 55,
                "end": 74,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 73,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 66,
                      "end": 73,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 73,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "S",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 140,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 107,
        "end": 140,
        "id": {
          "type": "Identifier",
          "start": 117,
          "end": 122,
          "name": "State",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 122,
          "end": 125,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 123,
              "end": 124,
              "name": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
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
          "start": 126,
          "end": 140,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 132,
              "end": 138,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 136,
                  "end": 137,
                  "typeName": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
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
      "type": "ClassDeclaration",
      "start": 142,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 154,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 166,
        "name": "Comp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 275,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 273,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 273,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
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
                "start": 233,
                "end": 273,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 243,
                    "end": 267,
                    "expression": {
                      "type": "CallExpression",
                      "start": 243,
                      "end": 266,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 243,
                        "end": 256,
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 256,
                          "name": "setState",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 262,
                                "end": 263,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 183,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "S",
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
      "implements": [],
      "abstract": false,
      "declare": false,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 207,
                "end": 215,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 212,
                  "name": "State",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 212,
                  "end": 215,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 213,
                      "end": 214,
                      "typeName": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
