__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 22,
              "end": 30,
              "exprName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "a",
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
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 36,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 35,
              "end": 36,
              "typeName": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
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
        "start": 38,
        "end": 47,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 41,
            "end": 45,
            "expression": {
              "type": "MemberExpression",
              "start": 41,
              "end": 44,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 71,
              "end": 79,
              "exprName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "a",
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
      "params": [
        {
          "type": "ObjectPattern",
          "start": 81,
          "end": 91,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 82,
              "end": 83,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 86,
              "end": 91,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 87,
                  "end": 90,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 90,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 100,
            "expression": {
              "type": "MemberExpression",
              "start": 96,
              "end": 99,
              "object": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 126,
              "end": 134,
              "exprName": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "a",
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
      "params": [
        {
          "type": "ArrayPattern",
          "start": 136,
          "end": 144,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 144,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 141,
              "end": 144,
              "elementType": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 155,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 153,
            "expression": {
              "type": "MemberExpression",
              "start": 149,
              "end": 152,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 301,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
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
        "start": 165,
        "end": 301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 170,
              "decorators": [],
              "name": "m0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 207,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 170,
                "end": 190,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 171,
                    "end": 189,
                    "name": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 181,
                      "end": 189,
                      "exprName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "a",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 194,
                      "end": 195,
                      "typeName": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
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
                "start": 197,
                "end": 207,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 201,
                    "end": 204,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 201,
                      "end": 204,
                      "object": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 211,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 211,
                "end": 231,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 212,
                    "end": 230,
                    "name": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 222,
                      "end": 230,
                      "exprName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "a",
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
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 232,
                  "end": 242,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 233,
                      "end": 234,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 237,
                      "end": 242,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 238,
                          "end": 241,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 241,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 240,
                              "end": 241,
                              "typeName": {
                                "type": "Identifier",
                                "start": 240,
                                "end": 241,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 254,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 248,
                    "end": 251,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 251,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 299,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 258,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 299,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 258,
                "end": 278,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 259,
                    "end": 277,
                    "name": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 269,
                      "end": 277,
                      "exprName": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
                        "decorators": [],
                        "name": "a",
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
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 279,
                  "end": 287,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 282,
                    "end": 287,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 284,
                      "end": 287,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 284,
                        "end": 285,
                        "typeName": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 285,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 299,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 296,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 293,
                      "end": 296,
                      "object": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 294,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
