__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 10,
                "end": 26,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 11,
                    "end": 15,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 15,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14,
                        "end": 15,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14,
                          "end": 15,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 214,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 42,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "value": 1,
              "raw": "1"
            },
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
            "start": 49,
            "end": 94,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 60,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 94,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 94,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 90,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 78,
                      "end": 89,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 78,
                        "end": 85,
                        "object": {
                          "type": "ThisExpression",
                          "start": 78,
                          "end": 82
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 83,
                          "end": 85,
                          "name": "x"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
          },
          {
            "type": "StaticBlock",
            "start": 98,
            "end": 212,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 151,
                "end": 177,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 151,
                  "end": 176,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 155,
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 158,
                    "end": 176,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 165,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 162,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "C",
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
                      "type": "MemberExpression",
                      "start": 170,
                      "end": 176,
                      "object": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 174,
                        "end": 176,
                        "name": "x"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 182,
                "end": 208,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 182,
                  "end": 207,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "getY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 189,
                    "end": 207,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 190,
                        "end": 196,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 193,
                          "end": 196,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 195,
                            "end": 196,
                            "typeName": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 196,
                              "decorators": [],
                              "name": "D",
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
                      "type": "MemberExpression",
                      "start": 201,
                      "end": 207,
                      "object": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 204,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 205,
                        "end": 207,
                        "name": "y"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 243,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 242,
            "decorators": [],
            "name": "getY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 242,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 226,
                "end": 242,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 227,
                    "end": 231,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
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
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 233,
                  "end": 242,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 236,
                    "end": 242
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 244,
      "end": 381,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 381,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 262,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 256,
              "end": 258,
              "name": "y"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 261,
              "end": 262,
              "value": 1,
              "raw": "1"
            },
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
            "type": "StaticBlock",
            "start": 266,
            "end": 379,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 318,
                "end": 344,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 318,
                  "end": 343,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 322,
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 325,
                    "end": 343,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 326,
                        "end": 332,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 329,
                          "end": 332,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 331,
                            "end": 332,
                            "typeName": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 332,
                              "decorators": [],
                              "name": "C",
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
                      "type": "MemberExpression",
                      "start": 337,
                      "end": 343,
                      "object": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 340,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 341,
                        "end": 343,
                        "name": "x"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 349,
                "end": 375,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 349,
                  "end": 374,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 353,
                    "decorators": [],
                    "name": "getY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 356,
                    "end": 374,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 357,
                        "end": 363,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 360,
                          "end": 363,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 362,
                            "end": 363,
                            "typeName": {
                              "type": "Identifier",
                              "start": 362,
                              "end": 363,
                              "decorators": [],
                              "name": "D",
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
                      "type": "MemberExpression",
                      "start": 368,
                      "end": 374,
                      "object": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 371,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 372,
                        "end": 374,
                        "name": "y"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "directive": null
              }
            ]
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
