__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 400,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "Ref",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Container",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Container",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Ref",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "foo",
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
          "start": 140,
          "end": 171,
          "name": "x",
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
                    "name": "Container",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "Ref",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 172,
        "end": 178,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 174,
          "end": 178
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 215,
            "name": "a",
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
                      "name": "Container",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "Ref",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 297,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 299,
                    "end": 304,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 262,
        "end": 281,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 264,
          "end": 281,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "optional": null,
          "readonly": null,
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
          "key": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 350,
                  "end": 353,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 367,
            "end": 398,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 368,
                "end": 384,
                "properties": [
                  {
                    "type": "Property",
                    "start": 370,
                    "end": 382,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 371,
                      "end": 378,
                      "object": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 374,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 378,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "name": "c",
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
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 389,
              "end": 398,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
