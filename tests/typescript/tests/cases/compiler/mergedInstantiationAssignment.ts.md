__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 543,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 109,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 76,
        "decorators": [],
        "name": "GenericObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            },
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
        "start": 89,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 107,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 107,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
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
                "start": 105,
                "end": 107,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "VariableDeclaration",
      "start": 111,
      "end": 197,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 122,
            "end": 196,
            "expression": {
              "type": "NewExpression",
              "start": 122,
              "end": 141,
              "callee": {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 145,
              "end": 196,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 145,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 158,
                    "decorators": [],
                    "name": "GenericObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 164,
                  "end": 195,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 164,
                      "end": 178,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 166,
                          "end": 176,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 168,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 170,
                              "end": 176
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 181,
                      "end": 195,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 183,
                          "end": 193,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 185,
                            "end": 193,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 202,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 205,
          "end": 208,
          "value": 432,
          "raw": "432"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 275,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 243,
        "decorators": [],
        "name": "GenericObjectWithoutSetter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 248,
              "end": 254
            },
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
        "start": 256,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 273,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
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
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 389,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 288,
            "end": 388,
            "expression": {
              "type": "NewExpression",
              "start": 288,
              "end": 320,
              "callee": {
                "type": "Identifier",
                "start": 292,
                "end": 318,
                "decorators": [],
                "name": "GenericObjectWithoutSetter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 324,
              "end": 388,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 324,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 350,
                    "decorators": [],
                    "name": "GenericObjectWithoutSetter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 356,
                  "end": 387,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 356,
                      "end": 370,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 358,
                          "end": 368,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 358,
                            "end": 359,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 360,
                            "end": 368,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 362,
                              "end": 368
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 373,
                      "end": 387,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 375,
                          "end": 385,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 377,
                            "end": 385,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 379,
                              "end": 385
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 390,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 390,
          "end": 394,
          "object": {
            "type": "Identifier",
            "start": 390,
            "end": 392,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 393,
            "end": 394,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 397,
          "end": 399,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 402,
      "end": 446,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 420,
        "decorators": [],
        "name": "NormalObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 446,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 425,
            "end": 444,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 444,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 442,
                "end": 444,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "VariableDeclaration",
      "start": 448,
      "end": 532,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 459,
            "end": 531,
            "expression": {
              "type": "NewExpression",
              "start": 459,
              "end": 477,
              "callee": {
                "type": "Identifier",
                "start": 463,
                "end": 475,
                "decorators": [],
                "name": "NormalObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 481,
              "end": 531,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 481,
                  "end": 493,
                  "typeName": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 493,
                    "decorators": [],
                    "name": "NormalObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 499,
                  "end": 530,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 499,
                      "end": 513,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 501,
                          "end": 511,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 502,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 503,
                            "end": 511,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 505,
                              "end": 511
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 516,
                      "end": 530,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 518,
                          "end": 528,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 519,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 520,
                            "end": 528,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 522,
                              "end": 528
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 533,
      "end": 543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 533,
        "end": 542,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 533,
          "end": 537,
          "object": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 536,
            "end": 537,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 540,
          "end": 542,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
