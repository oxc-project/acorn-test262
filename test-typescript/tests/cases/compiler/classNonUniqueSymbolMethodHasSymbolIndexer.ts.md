classNonUniqueSymbolMethodHasSymbolIndexer.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 67,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 67,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 67,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 46,
              "end": 64,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 64,
                "async": false,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 97,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 97,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 86,
                "end": 97,
                "indexType": {
                  "type": "TSTypeQuery",
                  "start": 88,
                  "end": 96,
                  "exprName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 87,
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 182,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 152,
        "decorators": [],
        "name": "Constructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 155,
        "end": 181,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 160,
            "end": 174,
            "argument": {
              "type": "Identifier",
              "start": 163,
              "end": 167,
              "decorators": [],
              "name": "args",
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
            }
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 183,
      "end": 285,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 203,
        "decorators": [],
        "name": "Mix",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 227,
          "end": 238,
          "decorators": [],
          "name": "classish",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSConstructorType",
              "start": 246,
              "end": 283,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 251,
                  "end": 265,
                  "argument": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 258,
                    "decorators": [],
                    "name": "args",
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
                  }
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
                      "key": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 276,
                        "decorators": [],
                        "name": "mixed",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "true",
                            "value": true
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 225,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 225,
                "decorators": [],
                "name": "Constructor",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 347,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 294,
        "end": 347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 300,
            "end": 346,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 300,
              "end": 305,
              "decorators": [],
              "name": "Mixer",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 308,
              "end": 346,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 312,
                  "end": 345,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 318,
                    "end": 345,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 324,
                        "end": 342,
                        "computed": true,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 326,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 327,
                          "end": 342,
                          "async": false,
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
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": null,
                  "implements": [],
                  "superClass": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 308,
                "end": 311,
                "decorators": [],
                "name": "Mix",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
