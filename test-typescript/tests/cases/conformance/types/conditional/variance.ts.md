__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 484,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 154,
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 154,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 151,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 119,
                "end": 151,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 120,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "extendsType": {
                  "type": "TSUnknownKeyword",
                  "start": 129,
                  "end": 136
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 146,
                  "end": 151,
                  "literal": {
                    "type": "Literal",
                    "start": 146,
                    "end": 151,
                    "raw": "false",
                    "value": false,
                    "regex": null,
                    "bigint": null
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 139,
                  "end": 143,
                  "literal": {
                    "type": "Literal",
                    "start": 139,
                    "end": 143,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 168,
            "end": 191,
            "expression": {
              "type": "ObjectExpression",
              "start": 168,
              "end": 182,
              "properties": [
                {
                  "type": "Property",
                  "start": 170,
                  "end": 180,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 174,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 176,
                    "end": 180,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 191,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 191,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 208,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 208,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 205,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 206,
                      "end": 207,
                      "literal": {
                        "type": "Literal",
                        "start": 206,
                        "end": 207,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 205,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 236,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 236,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 228,
                  "end": 236,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 228,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 239,
            "end": 242,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 264,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 264,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 256,
                  "end": 264,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 257,
                      "end": 263
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 484,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 484,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 370,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 349,
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 364,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 351,
                "end": 364,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 351,
                  "end": 362,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 354,
                    "end": 362,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 355,
                        "end": 361
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 367,
              "end": 369,
              "elements": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 431,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 378,
              "decorators": [],
              "name": "cast",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 378,
              "end": 431,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 428,
                "end": 431,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 379,
                  "end": 426,
                  "decorators": [],
                  "name": "_name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 426,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 387,
                      "end": 425,
                      "checkType": {
                        "type": "TSTupleType",
                        "start": 387,
                        "end": 390,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 388,
                            "end": 389,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 389,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "start": 399,
                        "end": 407,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 400,
                            "end": 406
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      },
                      "trueType": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 437,
            "end": 482,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 445,
              "decorators": [],
              "name": "pushThis",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 482,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 448,
                "end": 482,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 454,
                    "end": 478,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 454,
                      "end": 477,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 454,
                        "end": 471,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 454,
                          "end": 466,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 457,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 466,
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 471,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 303,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 303,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 320,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 314,
              "end": 320
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
