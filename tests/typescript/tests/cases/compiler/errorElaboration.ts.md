__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 399,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
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
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 73,
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 118,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 83,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 96,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 96,
                  "end": 104,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 97,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 100,
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 100,
                        "end": 103,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 101,
                            "end": 102,
                            "typeName": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 116,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 112,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
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
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 119,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 171,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 141,
            "end": 171,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 143,
              "end": 171,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 146,
                "end": 171,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 171,
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 158,
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 158,
                    "end": 171,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 159,
                        "end": 170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 162,
                          "decorators": [],
                          "name": "Ref",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 162,
                          "end": 170,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 163,
                              "end": 169
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 172,
        "end": 178,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 174,
          "end": 178
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 216,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 215,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 215,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 187,
                "end": 215,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 193,
                    "end": 215,
                    "typeName": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 202,
                      "decorators": [],
                      "name": "Container",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 202,
                      "end": 215,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 203,
                          "end": 214,
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 206,
                            "decorators": [],
                            "name": "Ref",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 206,
                            "end": 214,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 207,
                                "end": 213
                              }
                            ]
                          }
                        }
                      ]
                    }
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
      "type": "ExpressionStatement",
      "start": 217,
      "end": 224,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 223,
        "callee": {
          "type": "Identifier",
          "start": 217,
          "end": 220,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 247,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 260,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 262,
        "end": 281,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 264,
          "end": 281,
          "key": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSLiteralType",
            "start": 271,
            "end": 276,
            "literal": {
              "type": "Literal",
              "start": 271,
              "end": 276,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 279,
            "end": 280,
            "typeName": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "readonly": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 282,
        "end": 308,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 286,
            "end": 306,
            "argument": {
              "type": "ObjectExpression",
              "start": 293,
              "end": 305,
              "properties": [
                {
                  "type": "Property",
                  "start": 294,
                  "end": 304,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 297,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 299,
                    "end": 304,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 343,
            "end": 355,
            "properties": [
              {
                "type": "Property",
                "start": 345,
                "end": 353,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 350,
                  "end": 353,
                  "value": "a",
                  "raw": "'a'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 399,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 367,
            "end": 398,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 368,
                "end": 384,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 370,
                    "end": 382,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 371,
                      "end": 378,
                      "object": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 374,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 378,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 389,
              "end": 398,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
