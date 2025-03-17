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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "name": "getX",
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
                    "name": "c",
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
                          "name": "C",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 42,
              "name": "x"
            },
            "value": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 94,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 60,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 70,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "name": "getX",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 158,
                    "end": 176,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 165,
                        "name": "obj",
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
                              "name": "C",
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
                      "type": "MemberExpression",
                      "start": 170,
                      "end": 176,
                      "object": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 174,
                        "end": 176,
                        "name": "x"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
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
                    "name": "getY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 189,
                    "end": 207,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 190,
                        "end": 196,
                        "name": "obj",
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
                              "name": "D",
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
                      "type": "MemberExpression",
                      "start": 201,
                      "end": 207,
                      "object": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 204,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 205,
                        "end": 207,
                        "name": "y"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                "directive": null
              }
            ]
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
      "type": "VariableDeclaration",
      "start": 216,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 242,
            "name": "getY",
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
                    "name": "c",
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
                          "name": "D",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 244,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 381,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 256,
              "end": 258,
              "name": "y"
            },
            "value": {
              "type": "Literal",
              "start": 261,
              "end": 262,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
                    "name": "getX",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 325,
                    "end": 343,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 326,
                        "end": 332,
                        "name": "obj",
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
                              "name": "C",
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
                      "type": "MemberExpression",
                      "start": 337,
                      "end": 343,
                      "object": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 340,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 341,
                        "end": 343,
                        "name": "x"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
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
                    "name": "getY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 356,
                    "end": 374,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 357,
                        "end": 363,
                        "name": "obj",
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
                              "name": "D",
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
                      "type": "MemberExpression",
                      "start": 368,
                      "end": 374,
                      "object": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 371,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 372,
                        "end": 374,
                        "name": "y"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                "directive": null
              }
            ]
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
