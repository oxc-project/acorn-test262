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
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 85,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
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
              "typeName": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
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
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 130,
                "end": 237,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 149,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 140,
                      "decorators": [],
                      "name": "_tag",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "type": "MethodDefinition",
                    "start": 154,
                    "end": 233,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 165,
                      "end": 233,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 166,
                          "end": 180,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                              "typeArguments": null,
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
                              "optional": false
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
                                  "decorators": [],
                                  "name": "_tag",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 295,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 293,
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
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
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
    {
      "type": "ClassDeclaration",
      "start": 297,
      "end": 394,
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
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 313,
        "end": 322,
        "callee": {
          "type": "Identifier",
          "start": 313,
          "end": 319,
          "decorators": [],
          "name": "Tagged",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 394,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 392,
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
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 392,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
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
    {
      "type": "ClassDeclaration",
      "start": 396,
      "end": 485,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 414,
        "end": 485,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 483,
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
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 483,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
