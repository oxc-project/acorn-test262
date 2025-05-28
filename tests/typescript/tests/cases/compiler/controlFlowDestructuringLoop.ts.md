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
        "decorators": [],
        "name": "NumVal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "StrVal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Val",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "NumVal",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "StrVal",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "isNumVal",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 137,
          "end": 143,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Val",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "NumVal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
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
                "argument": {
                  "type": "MemberExpression",
                  "start": 178,
                  "end": 183,
                  "object": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "prefix": true
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 213,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 214,
          "end": 227,
          "decorators": [],
          "name": "things",
          "optional": false,
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
                  "decorators": [],
                  "name": "Val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 234,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 230,
          "end": 234
        }
      },
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 257,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 257,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 261,
              "end": 267,
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "isNumVal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 320,
                            "end": 335,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 320,
                              "end": 327,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 322,
                                  "end": 325,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 325,
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 325,
                                    "decorators": [],
                                    "name": "val",
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
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 330,
                              "end": 335,
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
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
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 360,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 361,
                              "end": 362,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "optional": false
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 408,
                            "end": 423,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 408,
                              "end": 415,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 410,
                                  "end": 413,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "val",
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
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 423,
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
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
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 441,
                            "end": 447,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
