__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 484,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "EndGate",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 86,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 36,
              "end": 86,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 56,
                "decorators": [],
                "name": "ICloneable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 57,
                "end": 86,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 67,
                    "end": 80,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 72,
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
                      "start": 74,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 76,
                        "end": 79
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
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 106,
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 115,
          "end": 133,
          "expression": {
            "type": "MemberExpression",
            "start": 115,
            "end": 133,
            "object": {
              "type": "Identifier",
              "start": 115,
              "end": 122,
              "decorators": [],
              "name": "EndGate",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 123,
              "end": 133,
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
        "start": 134,
        "end": 137,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 139,
      "end": 326,
      "id": {
        "type": "TSQualifiedName",
        "start": 146,
        "end": 162,
        "left": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 163,
        "end": 326,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 169,
            "end": 324,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 176,
              "end": 324,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 182,
                "end": 187,
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 187,
                "end": 209,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 188,
                    "end": 208,
                    "name": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 198,
                      "end": 208,
                      "typeName": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 208,
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
                "start": 209,
                "end": 324,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 219,
                    "end": 236,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 232,
                      "decorators": [],
                      "name": "_from",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 234,
                        "end": 235,
                        "typeName": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
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
                    "start": 247,
                    "end": 318,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 258,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 258,
                      "end": 318,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 259,
                          "end": 266,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 263,
                            "end": 266,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 265,
                              "end": 266,
                              "typeName": {
                                "type": "Identifier",
                                "start": 265,
                                "end": 266,
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
                        "start": 268,
                        "end": 318,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 282,
                            "end": 308,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 282,
                              "end": 307,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 282,
                                "end": 292,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 282,
                                  "end": 286
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 287,
                                  "end": 292,
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
                                "start": 295,
                                "end": 307,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 295,
                                  "end": 305,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 299,
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 300,
                                    "end": 305,
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
      "start": 328,
      "end": 484,
      "id": {
        "type": "TSQualifiedName",
        "start": 335,
        "end": 351,
        "left": {
          "type": "Identifier",
          "start": 335,
          "end": 342,
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 343,
          "end": 351,
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 352,
        "end": 484,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 482,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 365,
              "end": 482,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 371,
                "end": 382,
                "decorators": [],
                "name": "NumberTween",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 391,
                "end": 396,
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 396,
                "end": 404,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 397,
                    "end": 403
                  }
                ]
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 404,
                "end": 482,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 414,
                    "end": 476,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 425,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 425,
                      "end": 476,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 426,
                          "end": 438,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 430,
                            "end": 438,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 432,
                              "end": 438
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 440,
                        "end": 476,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 454,
                            "end": 466,
                            "expression": {
                              "type": "CallExpression",
                              "start": 454,
                              "end": 465,
                              "callee": {
                                "type": "Super",
                                "start": 454,
                                "end": 459
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 460,
                                  "end": 464,
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
