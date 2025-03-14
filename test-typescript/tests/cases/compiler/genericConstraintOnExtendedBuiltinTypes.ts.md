genericConstraintOnExtendedBuiltinTypes.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 36,
              "end": 86,
              "body": {
                "type": "TSInterfaceBody",
                "start": 57,
                "end": 86,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 67,
                    "end": 80,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 72,
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
                      "start": 74,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 76,
                        "end": 79
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
                "start": 46,
                "end": 56,
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "EndGate",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 137,
      "body": {
        "type": "TSInterfaceBody",
        "start": 134,
        "end": 137,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 115,
          "end": 133,
          "expression": {
            "type": "MemberExpression",
            "start": 115,
            "end": 133,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 115,
              "end": 122,
              "decorators": [],
              "name": "EndGate",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 123,
              "end": 133,
              "decorators": [],
              "name": "ICloneable",
              "optional": false
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 106,
        "decorators": [],
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 139,
      "end": 326,
      "body": {
        "type": "TSModuleBlock",
        "start": 163,
        "end": 326,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 169,
            "end": 324,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 176,
              "end": 324,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 209,
                "end": 324,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 219,
                    "end": 236,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 232,
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
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 247,
                    "end": 318,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 258,
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
                      "start": 258,
                      "end": 318,
                      "async": false,
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
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 282,
                                  "end": 286
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 287,
                                  "end": 292,
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 295,
                                "end": 307,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 295,
                                  "end": 305,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 299,
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 300,
                                    "end": 305,
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
                "start": 182,
                "end": 187,
                "decorators": [],
                "name": "Tween",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 187,
                "end": 209,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 188,
                    "end": 208,
                    "const": false,
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
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
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
        "start": 146,
        "end": 162,
        "left": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "decorators": [],
          "name": "EndGate",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "decorators": [],
          "name": "Tweening",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 328,
      "end": 484,
      "body": {
        "type": "TSModuleBlock",
        "start": 352,
        "end": 484,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 482,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 365,
              "end": 482,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 404,
                "end": 482,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 414,
                    "end": 476,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 425,
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
                      "start": 425,
                      "end": 476,
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 460,
                                  "end": 464,
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 454,
                                "end": 459
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
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 371,
                "end": 382,
                "decorators": [],
                "name": "NumberTween",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 391,
                "end": 396,
                "decorators": [],
                "name": "Tween",
                "optional": false
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
        "start": 335,
        "end": 351,
        "left": {
          "type": "Identifier",
          "start": 335,
          "end": 342,
          "decorators": [],
          "name": "EndGate",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 343,
          "end": 351,
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
