__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 475,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "EndGate",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 80,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 78,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 28,
              "end": 78,
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 48,
                "decorators": [],
                "name": "ICloneable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 78,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 59,
                    "end": 72,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 64,
                      "decorators": [],
                      "name": "Clone",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 68,
                        "end": 71
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 98,
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 125,
          "expression": {
            "type": "MemberExpression",
            "start": 107,
            "end": 125,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "decorators": [],
              "name": "EndGate",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 125,
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 131,
      "end": 317,
      "id": {
        "type": "TSQualifiedName",
        "start": 138,
        "end": 154,
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 145,
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 154,
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 155,
        "end": 317,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 161,
            "end": 315,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 168,
              "end": 315,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 179,
                "end": 201,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 180,
                    "end": 200,
                    "name": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 200,
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 201,
                "end": 315,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 211,
                    "end": 228,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "decorators": [],
                      "name": "_from",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 224,
                      "end": 227,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 226,
                        "end": 227,
                        "typeName": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 227,
                          "decorators": [],
                          "name": "T",
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 238,
                    "end": 309,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 249,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 249,
                      "end": 309,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 250,
                          "end": 257,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 254,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 256,
                              "end": 257,
                              "typeName": {
                                "type": "Identifier",
                                "start": 256,
                                "end": 257,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 259,
                        "end": 309,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 273,
                            "end": 299,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 273,
                              "end": 298,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 273,
                                "end": 283,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 273,
                                  "end": 277
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 278,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 286,
                                "end": 298,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 286,
                                  "end": 296,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 290,
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 319,
      "end": 475,
      "id": {
        "type": "TSQualifiedName",
        "start": 326,
        "end": 342,
        "left": {
          "type": "Identifier",
          "start": 326,
          "end": 333,
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 342,
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 343,
        "end": 475,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 349,
            "end": 473,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 356,
              "end": 473,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 373,
                "decorators": [],
                "name": "NumberTween",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 387,
                "end": 395,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 388,
                    "end": 394,
                    "typeName": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 394,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 395,
                "end": 473,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 405,
                    "end": 467,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 416,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 416,
                      "end": 467,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 417,
                          "end": 429,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 429,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 423,
                              "end": 429
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 431,
                        "end": 467,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 445,
                            "end": 457,
                            "expression": {
                              "type": "CallExpression",
                              "start": 445,
                              "end": 456,
                              "callee": {
                                "type": "Super",
                                "start": 445,
                                "end": 450
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 455,
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
