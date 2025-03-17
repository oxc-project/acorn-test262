__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 393,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 27,
            "name": "aIndex",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 62,
            "name": "a",
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
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "name": "aIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "name": "aIndex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 113,
                  "name": "aIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "x",
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
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 157,
            "name": "bIndex",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 191,
            "name": "b",
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
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 201,
                  "end": 203,
                  "properties": []
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "name": "bIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 238,
                  "name": "bIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "name": "x",
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
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 278,
            "name": "cIndex",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 339,
            "name": "c",
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
                    "name": "Foo",
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
      "kind": "const",
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 358,
            "name": "cIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 377,
                  "name": "cIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "name": "x",
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
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
