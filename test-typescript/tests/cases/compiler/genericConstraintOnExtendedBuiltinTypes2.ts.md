genericConstraintOnExtendedBuiltinTypes2.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 80,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 78,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 28,
              "end": 78,
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 78,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 59,
                    "end": 72,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 64,
                      "decorators": [],
                      "name": "Clone",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 48,
                "decorators": [],
                "name": "ICloneable",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "EndGate",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 125,
          "expression": {
            "type": "MemberExpression",
            "start": 107,
            "end": 125,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "decorators": [],
              "name": "EndGate",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 125,
              "decorators": [],
              "name": "ICloneable",
              "optional": false
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 98,
        "decorators": [],
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 131,
      "end": 317,
      "body": {
        "type": "TSModuleBlock",
        "start": 155,
        "end": 317,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 161,
            "end": 315,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 168,
              "end": 315,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 201,
                "end": 315,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 211,
                    "end": 228,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "decorators": [],
                      "name": "_from",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 238,
                    "end": 309,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 249,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 249,
                      "end": 309,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 273,
                                  "end": 277
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 278,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 286,
                                "end": 298,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 286,
                                  "end": 296,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 290,
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
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
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "Tween",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 179,
                "end": 201,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 180,
                    "end": 200,
                    "const": false,
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
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
        ]
      },
      "declare": false,
      "global": false,
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 154,
          "decorators": [],
          "name": "Tweening",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 319,
      "end": 475,
      "body": {
        "type": "TSModuleBlock",
        "start": 343,
        "end": 475,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 349,
            "end": 473,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 356,
              "end": 473,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 395,
                "end": 473,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 405,
                    "end": 467,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 416,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 416,
                      "end": 467,
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 455,
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 445,
                                "end": 450
                              },
                              "optional": false
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
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 373,
                "decorators": [],
                "name": "NumberTween",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "decorators": [],
                "name": "Tween",
                "optional": false
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
                      "optional": false
                    }
                  }
                ]
              }
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
        "type": "TSQualifiedName",
        "start": 326,
        "end": 342,
        "left": {
          "type": "Identifier",
          "start": 326,
          "end": 333,
          "decorators": [],
          "name": "EndGate",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 342,
          "decorators": [],
          "name": "Tweening",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
