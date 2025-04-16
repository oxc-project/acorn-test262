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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 22,
        "end": 46,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 26,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "name": "Tagged",
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
          "start": 91,
          "end": 98,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 97,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 130,
                "end": 237,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 149,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 140,
                      "name": "_tag",
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
                      "start": 140,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 154,
                    "end": 233,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 165,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 165,
                      "end": 233,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 166,
                          "end": 180,
                          "argument": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 182,
                        "end": 233,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 190,
                            "end": 205,
                            "expression": {
                              "type": "CallExpression",
                              "start": 190,
                              "end": 204,
                              "callee": {
                                "type": "Super",
                                "start": 190,
                                "end": 195
                              },
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 196,
                                  "end": 203,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 199,
                                    "end": 203,
                                    "name": "args",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 212,
                            "end": 227,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 212,
                              "end": 226,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 212,
                                "end": 221,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 212,
                                  "end": 216
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 217,
                                  "end": 221,
                                  "name": "_tag",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 224,
                                "end": 226,
                                "value": "",
                                "raw": "\"\""
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
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 85,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "class A",
                      "raw": "\"class A\""
                    }
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
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 297,
      "end": 394,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 313,
        "end": 322,
        "callee": {
          "type": "Identifier",
          "start": 313,
          "end": 319,
          "name": "Tagged",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 394,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 392,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 335,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 392,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "class B",
                      "raw": "\"class B\""
                    }
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
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 396,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 403,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 412,
        "end": 413,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 414,
        "end": 485,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 483,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 426,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 483,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "class C",
                      "raw": "\"class C\""
                    }
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
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
