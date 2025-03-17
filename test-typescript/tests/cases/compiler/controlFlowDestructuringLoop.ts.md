__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 466,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "name": "NumVal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 55,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 53,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
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
      "start": 56,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "name": "StrVal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
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
      "type": "TSTypeAliasDeclaration",
      "start": 90,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "name": "Val",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 101,
        "end": 116,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 101,
            "end": 107,
            "typeName": {
              "type": "Identifier",
              "start": 101,
              "end": 107,
              "name": "NumVal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 110,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "name": "StrVal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 119,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 136,
        "name": "isNumVal",
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
          "start": 137,
          "end": 143,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 143,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 143,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "name": "Val",
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
        "start": 158,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 164,
            "end": 197,
            "argument": {
              "type": "BinaryExpression",
              "start": 171,
              "end": 196,
              "left": {
                "type": "UnaryExpression",
                "start": 171,
                "end": 183,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 178,
                  "end": 183,
                  "object": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 188,
                "end": 196,
                "value": "number",
                "raw": "'number'"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 144,
        "end": 157,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 146,
          "end": 157,
          "parameterName": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 151,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 157,
                "name": "NumVal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 213,
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
          "start": 214,
          "end": 227,
          "name": "things",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 227,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 222,
              "end": 227,
              "elementType": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 225,
                  "name": "Val",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 466,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 241,
            "end": 464,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 246,
              "end": 257,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 257,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 257,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 261,
              "end": 267,
              "name": "things",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 269,
              "end": 464,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 279,
                  "end": 458,
                  "test": {
                    "type": "CallExpression",
                    "start": 283,
                    "end": 298,
                    "callee": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 291,
                      "name": "isNumVal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 300,
                    "end": 374,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 314,
                        "end": 336,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 320,
                            "end": 335,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 320,
                              "end": 327,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 322,
                                  "end": 325,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 325,
                                    "name": "val",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 325,
                                    "name": "val",
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
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 330,
                              "end": 335,
                              "name": "thing",
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
                        "type": "ExpressionStatement",
                        "start": 349,
                        "end": 364,
                        "expression": {
                          "type": "CallExpression",
                          "start": 349,
                          "end": 363,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 349,
                            "end": 360,
                            "object": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 352,
                              "name": "val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 360,
                              "name": "toFixed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 361,
                              "end": 362,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 388,
                    "end": 458,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 402,
                        "end": 424,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 408,
                            "end": 423,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 408,
                              "end": 415,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 410,
                                  "end": 413,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 413,
                                    "name": "val",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 413,
                                    "name": "val",
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
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 423,
                              "name": "thing",
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
                        "type": "ExpressionStatement",
                        "start": 437,
                        "end": 448,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 437,
                          "end": 447,
                          "object": {
                            "type": "Identifier",
                            "start": 437,
                            "end": 440,
                            "name": "val",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 441,
                            "end": 447,
                            "name": "length",
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
                  }
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
        "start": 228,
        "end": 234,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 230,
          "end": 234
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
