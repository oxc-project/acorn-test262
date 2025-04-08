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
        "name": "EndGate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "ICloneable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "Clone",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "EndGate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 125,
              "name": "ICloneable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
          "name": "EndGate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 154,
          "name": "Tweening",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "name": "Tween",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 201,
                "end": 315,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 211,
                    "end": 228,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "name": "_from",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 238,
                    "end": 309,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 249,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 249,
                      "end": 309,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 250,
                          "end": 257,
                          "name": "from",
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
                                  "name": "_from",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                                    "name": "from",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 296,
                                    "name": "Clone",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              }
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 200,
                        "name": "ICloneable",
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
                  }
                ]
              },
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
          "name": "EndGate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 342,
          "name": "Tweening",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 373,
                "name": "NumberTween",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "name": "Tween",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 395,
                "end": 473,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 405,
                    "end": 467,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 416,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 416,
                      "end": 467,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 417,
                          "end": 429,
                          "name": "from",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 429,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 423,
                              "end": 429
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 455,
                                  "name": "from",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
