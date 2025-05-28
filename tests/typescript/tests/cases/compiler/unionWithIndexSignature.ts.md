__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 544,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "NumList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 28,
                "end": 31,
                "literal": {
                  "type": "Literal",
                  "start": 28,
                  "end": 31,
                  "value": "n",
                  "raw": "'n'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 35,
            "end": 55,
            "parameters": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 45,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 39,
                    "end": 45
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 75,
        "decorators": [],
        "name": "StrList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 84,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 89,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 86,
                "end": 89,
                "literal": {
                  "type": "Literal",
                  "start": 86,
                  "end": 89,
                  "value": "s",
                  "raw": "'s'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 93,
            "end": 113,
            "parameters": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 97,
                    "end": 103
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 228,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 124,
        "end": 228,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 136,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 136,
          "end": 165,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 137,
              "end": 164,
              "name": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 147,
                "end": 164,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 147,
                    "end": 154,
                    "typeName": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 154,
                      "decorators": [],
                      "name": "NumList",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 157,
                    "end": 164,
                    "typeName": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 164,
                      "decorators": [],
                      "name": "StrList",
                      "optional": false,
                      "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 166,
            "end": 194,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 194,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 171,
                "end": 194,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnionType",
                    "start": 176,
                    "end": 193,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 176,
                        "end": 183,
                        "typeName": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 183,
                          "decorators": [],
                          "name": "NumList",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 186,
                        "end": 193,
                        "typeName": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 193,
                          "decorators": [],
                          "name": "StrList",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 196,
          "end": 228,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 200,
              "end": 216,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 204,
                  "end": 215,
                  "id": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 206,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 209,
                    "end": 215,
                    "object": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 212,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 213,
                      "end": 214,
                      "value": 1,
                      "raw": "1"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 252,
      "end": 301,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 259,
        "end": 301,
        "id": {
          "type": "Identifier",
          "start": 264,
          "end": 274,
          "decorators": [],
          "name": "TypedArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 277,
          "end": 300,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 277,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 287,
                "decorators": [],
                "name": "Int32Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 290,
              "end": 300,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 300,
                "decorators": [],
                "name": "Uint8Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 303,
      "end": 433,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 310,
        "end": 433,
        "id": {
          "type": "Identifier",
          "start": 319,
          "end": 331,
          "decorators": [],
          "name": "isTypedArray",
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
            "start": 332,
            "end": 337,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 335,
                "end": 337,
                "members": []
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 338,
          "end": 368,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 340,
            "end": 368,
            "parameterName": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 368,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 345,
                "end": 368,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 355,
                      "decorators": [],
                      "name": "Int32Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 358,
                    "end": 368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 368,
                      "decorators": [],
                      "name": "Uint8Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 369,
          "end": 433,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 373,
              "end": 431,
              "argument": {
                "type": "LogicalExpression",
                "start": 380,
                "end": 430,
                "left": {
                  "type": "BinaryExpression",
                  "start": 380,
                  "end": 403,
                  "left": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 403,
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "start": 407,
                  "end": 430,
                  "left": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 430,
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 435,
      "end": 544,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 442,
        "end": 544,
        "id": {
          "type": "Identifier",
          "start": 451,
          "end": 458,
          "decorators": [],
          "name": "flatten",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 458,
          "end": 487,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 459,
              "end": 486,
              "name": {
                "type": "Identifier",
                "start": 459,
                "end": 460,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 469,
                "end": 486,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 469,
                    "end": 475
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 476,
                    "end": 486,
                    "typeName": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 486,
                      "decorators": [],
                      "name": "TypedArray",
                      "optional": false,
                      "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 488,
            "end": 494,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 496,
          "end": 544,
          "body": [
            {
              "type": "IfStatement",
              "start": 500,
              "end": 542,
              "test": {
                "type": "CallExpression",
                "start": 504,
                "end": 521,
                "callee": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 516,
                  "decorators": [],
                  "name": "isTypedArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 517,
                    "end": 520,
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 523,
                "end": 542,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 531,
                    "end": 538,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 531,
                      "end": 537,
                      "object": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 534,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 535,
                        "end": 536,
                        "value": 1,
                        "raw": "1"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
