__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 33,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 11,
                    "end": 31,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 14,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 31,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 17,
                        "end": 31,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 19,
                            "end": 29,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 19,
                              "end": 20,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 21,
                              "end": 29,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 23,
                                "end": 29
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
            "start": 36,
            "end": 38,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 61,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 55,
            "end": 60,
            "value": "key",
            "raw": "\"key\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 62,
      "end": 121,
      "test": {
        "type": "LogicalExpression",
        "start": 66,
        "end": 90,
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 75,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
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
          "start": 79,
          "end": 90,
          "object": {
            "type": "MemberExpression",
            "start": 79,
            "end": 88,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
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
            "start": 89,
            "end": 90,
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
        "start": 92,
        "end": 121,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 98,
            "end": 109,
            "expression": {
              "type": "MemberExpression",
              "start": 98,
              "end": 109,
              "object": {
                "type": "MemberExpression",
                "start": 98,
                "end": 107,
                "object": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
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
                "start": 108,
                "end": 109,
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
      "start": 123,
      "end": 170,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 155,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 132,
                "end": 155,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 134,
                    "end": 153,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 137,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 139,
                        "end": 153,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 141,
                            "end": 151,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 143,
                              "end": 151,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 145,
                                "end": 151
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
            "start": 158,
            "end": 169,
            "properties": [
              {
                "type": "Property",
                "start": 160,
                "end": 167,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 163,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 165,
                  "end": 167,
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
      "type": "VariableDeclaration",
      "start": 171,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "decorators": [],
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 186,
            "end": 191,
            "value": "key",
            "raw": "\"key\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 193,
      "end": 239,
      "test": {
        "type": "MemberExpression",
        "start": 197,
        "end": 208,
        "object": {
          "type": "MemberExpression",
          "start": 197,
          "end": 206,
          "object": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
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
          "start": 207,
          "end": 208,
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
        "start": 210,
        "end": 239,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 227,
            "expression": {
              "type": "MemberExpression",
              "start": 216,
              "end": 227,
              "object": {
                "type": "MemberExpression",
                "start": 216,
                "end": 225,
                "object": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 224,
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
                "start": 226,
                "end": 227,
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
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 254,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 255,
        "end": 285,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 261,
            "end": 283,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 282,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 264,
                "end": 282,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 273,
                    "end": 282
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
      "start": 286,
      "end": 306,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 300,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 300,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 295,
                "end": 300,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 298,
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 298,
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
            "start": 303,
            "end": 305,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 324,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 319,
            "decorators": [],
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 322,
            "end": 323,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 325,
      "end": 371,
      "test": {
        "type": "MemberExpression",
        "start": 329,
        "end": 340,
        "object": {
          "type": "MemberExpression",
          "start": 329,
          "end": 338,
          "object": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
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
          "start": 339,
          "end": 340,
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
        "start": 342,
        "end": 371,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 359,
            "expression": {
              "type": "MemberExpression",
              "start": 348,
              "end": 359,
              "object": {
                "type": "MemberExpression",
                "start": 348,
                "end": 357,
                "object": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 356,
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
                "start": 358,
                "end": 359,
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
