__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 485,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
        "start": 109,
        "end": 154,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 152,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSUnknownKeyword",
                  "start": 129,
                  "end": 136
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 139,
                  "end": 143,
                  "literal": {
                    "type": "Literal",
                    "start": 139,
                    "end": 143,
                    "value": true,
                    "raw": "true"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 146,
                  "end": 151,
                  "literal": {
                    "type": "Literal",
                    "start": 146,
                    "end": 151,
                    "value": false,
                    "raw": "false"
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 156,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 174,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 176,
                    "end": 180,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 191,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 208,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 205,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 236,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 236,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 228,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 239,
            "end": 242,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 264,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 303,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 484,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 370,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 349,
              "name": "instance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 367,
              "end": 369,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 431,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 378,
              "name": "cast",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 378,
              "end": 431,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 379,
                  "end": 426,
                  "name": "_name",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 389,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "trueType": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "falseType": {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 428,
                "end": 431,
                "body": []
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
            "type": "MethodDefinition",
            "start": 437,
            "end": 482,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 445,
              "name": "pushThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 482,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 448,
                "end": 482,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 454,
                    "end": 478,
                    "expression": {
                      "type": "CallExpression",
                      "start": 454,
                      "end": 477,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 454,
                        "end": 471,
                        "object": {
                          "type": "MemberExpression",
                          "start": 454,
                          "end": 466,
                          "object": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 457,
                            "name": "Bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 466,
                            "name": "instance",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 471,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 303,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 320,
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 314,
              "end": 320
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
