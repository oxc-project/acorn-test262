__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 22,
        "end": 46,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 26,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 40,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 35,
                "end": 40,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 46,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 240,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 238,
            "argument": {
              "type": "ClassExpression",
              "start": 111,
              "end": 237,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 130,
                "end": 237,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 149,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 140,
                      "decorators": [],
                      "name": "_tag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 154,
                    "end": 233,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 165,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 165,
                      "end": 233,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 182,
                        "end": 233,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 190,
                            "end": 205,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 190,
                              "end": 204,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 196,
                                  "end": 203,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 199,
                                    "end": 203,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 190,
                                "end": 195
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 212,
                            "end": 227,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 212,
                              "end": 226,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 212,
                                "end": 221,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 212,
                                  "end": 216
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 217,
                                  "end": 221,
                                  "decorators": [],
                                  "name": "_tag",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 224,
                                "end": 226,
                                "raw": "\"\"",
                                "value": ""
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
                          "type": "RestElement",
                          "start": 166,
                          "end": 180,
                          "argument": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 175,
                              "end": 180,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 175,
                                "end": 178
                              }
                            }
                          },
                          "value": null
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
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 98,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 97,
              "end": 98,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 89,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 89,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 85,
                "end": 89,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 86,
                    "end": 88,
                    "members": []
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 85,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 295,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 293,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 293,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 293,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 272,
                    "end": 289,
                    "argument": {
                      "type": "Literal",
                      "start": 279,
                      "end": 288,
                      "raw": "\"class A\"",
                      "value": "class A"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "A",
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
      "start": 297,
      "end": 394,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 394,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 392,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 335,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 392,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 339,
                "end": 392,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 371,
                    "end": 388,
                    "argument": {
                      "type": "Literal",
                      "start": 378,
                      "end": 387,
                      "raw": "\"class B\"",
                      "value": "class B"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 303,
        "end": 304,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 313,
        "end": 322,
        "arguments": [
          {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 313,
          "end": 319,
          "decorators": [],
          "name": "Tagged",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 396,
      "end": 485,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 414,
        "end": 485,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 483,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 426,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 483,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 430,
                "end": 483,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 462,
                    "end": 479,
                    "argument": {
                      "type": "Literal",
                      "start": 469,
                      "end": 478,
                      "raw": "\"class C\"",
                      "value": "class C"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 402,
        "end": 403,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 412,
        "end": 413,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
