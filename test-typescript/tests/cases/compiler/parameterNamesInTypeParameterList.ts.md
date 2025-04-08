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
        "name": "f0",
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
          "start": 32,
          "end": 36,
          "name": "a",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 22,
              "end": 30,
              "exprName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 81,
          "end": 91,
          "properties": [
            {
              "type": "Property",
              "start": 82,
              "end": 83,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 71,
              "end": 79,
              "exprName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 136,
          "end": 144,
          "elements": [
            {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 126,
              "end": 134,
              "exprName": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 170,
              "name": "m0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "name": "a",
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 181,
                      "end": 189,
                      "exprName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 211,
              "end": 254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 232,
                  "end": 242,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 233,
                      "end": 234,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 222,
                      "end": 230,
                      "exprName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 258,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 299,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 279,
                  "end": 287,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 269,
                      "end": 277,
                      "exprName": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
