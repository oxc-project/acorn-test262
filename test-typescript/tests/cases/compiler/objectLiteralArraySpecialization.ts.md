__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 351,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 67,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 46,
          "decorators": [],
          "name": "initialValues",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 46,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 43,
              "end": 46,
              "elementType": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 66,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 49,
          "end": 66,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 63,
            "end": 66,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 49,
            "end": 63,
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 189,
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 189,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 99,
            "end": 131,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 129,
                "decorators": [],
                "name": "initialItems",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 124,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 126,
                    "end": 129,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 127,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 144,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 179,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 156,
                    "end": 179,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 161,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 158,
                          "end": 161,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 160,
                            "end": 161,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 161,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 163,
                        "end": 167,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 172,
                        "end": 179
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 186,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 182,
                "end": 186
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 92,
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
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
      "start": 190,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 199,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 263,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 209,
                "end": 262,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 211,
                    "end": 234,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 213,
                        "end": 224,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 217,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 219,
                          "end": 224,
                          "raw": "\"bob\"",
                          "value": "bob",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 226,
                        "end": 232,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 228,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 230,
                          "end": 232,
                          "raw": "24",
                          "value": 24,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 236,
                    "end": 260,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 238,
                        "end": 250,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 242,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 244,
                          "end": 250,
                          "raw": "\"doug\"",
                          "value": "doug",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 252,
                        "end": 258,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 254,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 256,
                          "end": 258,
                          "raw": "32",
                          "value": 32,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 208,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 331,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 330,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 303,
            "end": 329,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 329,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 313,
                "end": 319,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 319,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 324,
                "end": 329,
                "raw": "\"bob\"",
                "value": "bob",
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 285,
          "end": 302,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 290,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 302,
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
