__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 17,
                "end": 23
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 67,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 67,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 67,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 46,
              "end": 64,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 64,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 64,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 54,
                      "end": 62,
                      "argument": {
                        "type": "Literal",
                        "start": 61,
                        "end": 62,
                        "value": 1,
                        "raw": "1"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 97,
            "name": "e1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 97,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 86,
                "end": 97,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 87,
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeQuery",
                  "start": 88,
                  "end": 96,
                  "exprName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 152,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 155,
        "end": 181,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 160,
            "end": 174,
            "argument": {
              "type": "Identifier",
              "start": 163,
              "end": 167,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 174,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 169,
                "end": 174,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 169,
                  "end": 172
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 176,
          "end": 181,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 179,
            "end": 181,
            "members": []
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 183,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 203,
        "name": "Mix",
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
          "start": 227,
          "end": 238,
          "name": "classish",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 237,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 225,
                "name": "Constructor",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 239,
        "end": 284,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 241,
          "end": 284,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSConstructorType",
              "start": 246,
              "end": 283,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 251,
                  "end": 265,
                  "argument": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 258,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 260,
                      "end": 265,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 260,
                        "end": 263
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 267,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 270,
                  "end": 283,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 271,
                      "end": 282,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 276,
                        "name": "mixed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 276,
                        "end": 282,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 278,
                          "end": 282,
                          "literal": {
                            "type": "Literal",
                            "start": 278,
                            "end": 282,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 347,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 294,
        "end": 347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 300,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 300,
              "end": 305,
              "name": "Mixer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 308,
              "end": 346,
              "callee": {
                "type": "Identifier",
                "start": 308,
                "end": 311,
                "name": "Mix",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 312,
                  "end": 345,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 318,
                    "end": 345,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 324,
                        "end": 342,
                        "static": false,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 326,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 327,
                          "end": 342,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 330,
                            "end": 342,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 332,
                                "end": 340,
                                "argument": {
                                  "type": "Literal",
                                  "start": 339,
                                  "end": 340,
                                  "value": 1,
                                  "raw": "1"
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
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
