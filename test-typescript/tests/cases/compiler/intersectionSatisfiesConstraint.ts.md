__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 457,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "name": "FirstInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 55,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 53,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 45,
              "name": "commonProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
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
      "start": 57,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 82,
        "name": "SecondInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 103,
              "name": "commonProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
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
      "start": 115,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 136,
            "name": "myFirstFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 328,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "name": "param1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 192,
                    "end": 193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
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
              "start": 198,
              "end": 328,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 204,
                  "end": 295,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 210,
                      "end": 295,
                      "id": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 249,
                        "name": "newParam",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 249,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 220,
                            "end": 249,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 220,
                                "end": 221,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 220,
                                  "end": 221,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 224,
                                "end": 249,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 226,
                                    "end": 247,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 226,
                                      "end": 239,
                                      "name": "otherProperty",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 239,
                                      "end": 247,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 241,
                                        "end": 247
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 252,
                        "end": 295,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 265,
                          "object": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 258,
                            "name": "Object",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 265,
                            "name": "assign",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 266,
                            "end": 272,
                            "name": "param1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 274,
                            "end": 294,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 276,
                                "end": 292,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 276,
                                  "end": 289,
                                  "name": "otherProperty",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 291,
                                  "end": 292,
                                  "value": 3,
                                  "raw": "3"
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
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
                {
                  "type": "ExpressionStatement",
                  "start": 300,
                  "end": 326,
                  "expression": {
                    "type": "CallExpression",
                    "start": 300,
                    "end": 326,
                    "callee": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 316,
                      "name": "mySecondFunction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 325,
                        "name": "newParam",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 183,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 182,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "start": 150,
                    "end": 182,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 164,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 164,
                          "name": "FirstInterface",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 182,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 182,
                          "name": "SecondInterface",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 352,
            "name": "mySecondFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 355,
            "end": 456,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 417,
                "end": 428,
                "name": "newParam",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 425,
                  "end": 428,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 428,
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
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
              "start": 433,
              "end": 456,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 439,
                  "end": 454,
                  "argument": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 454,
                    "name": "newParam",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 355,
              "end": 416,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 356,
                  "end": 415,
                  "name": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 366,
                    "end": 415,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 368,
                        "end": 391,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 382,
                          "name": "commonProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 382,
                          "end": 390,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 384,
                            "end": 390
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 392,
                        "end": 413,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 405,
                          "name": "otherProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 405,
                          "end": 413,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 407,
                            "end": 413
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
