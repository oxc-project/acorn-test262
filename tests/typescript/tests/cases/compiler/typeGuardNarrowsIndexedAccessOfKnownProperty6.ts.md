__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 392,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 27,
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 27,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 22,
                "end": 27,
                "literal": {
                  "type": "Literal",
                  "start": 22,
                  "end": 27,
                  "value": "key",
                  "raw": "\"key\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 68,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 62,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 38,
                "end": 62,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 60,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 46,
                        "end": 60,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 48,
                            "end": 58,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 48,
                              "end": 49,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 50,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 52,
                                "end": 58
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 65,
            "end": 67,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 69,
      "end": 128,
      "test": {
        "type": "LogicalExpression",
        "start": 73,
        "end": 97,
        "left": {
          "type": "MemberExpression",
          "start": 73,
          "end": 82,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 86,
          "end": 97,
          "object": {
            "type": "MemberExpression",
            "start": 86,
            "end": 95,
            "object": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "decorators": [],
              "name": "aIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 99,
        "end": 128,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 116,
            "expression": {
              "type": "MemberExpression",
              "start": 105,
              "end": 116,
              "object": {
                "type": "MemberExpression",
                "start": 105,
                "end": 114,
                "object": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 113,
                  "decorators": [],
                  "name": "aIndex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 158,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 157,
            "decorators": [],
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 157,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 152,
                "end": 157,
                "literal": {
                  "type": "Literal",
                  "start": 152,
                  "end": 157,
                  "value": "key",
                  "raw": "\"key\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 206,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 191,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 168,
                "end": 191,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 170,
                    "end": 189,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 173,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 175,
                        "end": 189,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 177,
                            "end": 187,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 179,
                              "end": 187,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 181,
                                "end": 187
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 194,
            "end": 205,
            "properties": [
              {
                "type": "Property",
                "start": 196,
                "end": 203,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 201,
                  "end": 203,
                  "properties": []
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
      "type": "IfStatement",
      "start": 207,
      "end": 253,
      "test": {
        "type": "MemberExpression",
        "start": 211,
        "end": 222,
        "object": {
          "type": "MemberExpression",
          "start": 211,
          "end": 220,
          "object": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "decorators": [],
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 224,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 230,
            "end": 241,
            "expression": {
              "type": "MemberExpression",
              "start": 230,
              "end": 241,
              "object": {
                "type": "MemberExpression",
                "start": 230,
                "end": 239,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 238,
                  "decorators": [],
                  "name": "bIndex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 279,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 278,
            "decorators": [],
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 278,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 277,
                "end": 278,
                "literal": {
                  "type": "Literal",
                  "start": 277,
                  "end": 278,
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 280,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 293,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 294,
        "end": 324,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 300,
            "end": 322,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 301,
              "end": 321,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 303,
                "end": 321,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 303,
                    "end": 309
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 312,
                    "end": 321
                  }
                ]
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
      "start": 325,
      "end": 345,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 339,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 339,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 334,
                "end": 339,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 334,
                  "end": 337,
                  "typeName": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 337,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 342,
            "end": 344,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 346,
      "end": 392,
      "test": {
        "type": "MemberExpression",
        "start": 350,
        "end": 361,
        "object": {
          "type": "MemberExpression",
          "start": 350,
          "end": 359,
          "object": {
            "type": "Identifier",
            "start": 350,
            "end": 351,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 358,
            "decorators": [],
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 363,
        "end": 392,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 369,
            "end": 380,
            "expression": {
              "type": "MemberExpression",
              "start": 369,
              "end": 380,
              "object": {
                "type": "MemberExpression",
                "start": 369,
                "end": 378,
                "object": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 377,
                  "decorators": [],
                  "name": "cIndex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
