noSubtypeReduction.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 332,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 72,
        "body": {
          "type": "TSInterfaceBody",
          "start": 42,
          "end": 72,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 48,
              "end": 70,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "arr",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 53,
                  "end": 69,
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "start": 53,
                    "end": 67,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 55,
                        "end": 65,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          }
                        }
                      }
                    ]
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
          "start": 39,
          "end": 41,
          "decorators": [],
          "name": "IA",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 81,
        "end": 136,
        "body": {
          "type": "TSInterfaceBody",
          "start": 95,
          "end": 136,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 101,
              "end": 134,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "decorators": [],
                "name": "arr",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 106,
                  "end": 133,
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "start": 106,
                    "end": 131,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 108,
                        "end": 118,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 109,
                          "end": 117,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 111,
                            "end": 117
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 119,
                        "end": 129,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 120,
                          "end": 128,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 122,
                            "end": 128
                          }
                        }
                      }
                    ]
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
          "start": 91,
          "end": 94,
          "decorators": [],
          "name": "IAB",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 331,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 145,
        "end": 331,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 169,
          "end": 331,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 175,
              "end": 207,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 181,
                  "end": 206,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 185,
                    "decorators": [],
                    "name": "useB",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 188,
                    "end": 206,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 203,
                      "end": 206,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 189,
                        "end": 198,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 190,
                          "end": 198,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 192,
                            "end": 198
                          }
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ForOfStatement",
              "start": 212,
              "end": 329,
              "await": false,
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 329,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 246,
                    "end": 264,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 261,
                      "end": 264,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 250,
                      "end": 259,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 250,
                        "end": 253,
                        "raw": "'A'",
                        "value": "A"
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "decorators": [],
                        "name": "el",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 273,
                    "end": 323,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 288,
                      "end": 323,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 302,
                          "end": 313,
                          "expression": {
                            "type": "CallExpression",
                            "start": 302,
                            "end": 312,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 307,
                                "end": 311,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 307,
                                  "end": 309,
                                  "decorators": [],
                                  "name": "el",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 310,
                                  "end": 311,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 306,
                              "decorators": [],
                              "name": "useB",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 277,
                      "end": 286,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 277,
                        "end": 280,
                        "raw": "'B'",
                        "value": "B"
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 286,
                        "decorators": [],
                        "name": "el",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 217,
                "end": 225,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 223,
                    "end": 225,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "decorators": [],
                      "name": "el",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "right": {
                "type": "MemberExpression",
                "start": 229,
                "end": 234,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 154,
          "end": 155,
          "decorators": [],
          "name": "F",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 156,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 167,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 159,
                "end": 167,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 161,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 161,
                      "decorators": [],
                      "name": "IA",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 167,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "decorators": [],
                      "name": "IAB",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
