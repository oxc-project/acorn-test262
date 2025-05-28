__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 414,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "decorators": [],
        "name": "omit",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 97,
              "end": 103
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
          "start": 105,
          "end": 124,
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 112,
              "end": 124,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 121,
                "end": 124,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 121,
                  "end": 122,
                  "typeName": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 126,
          "end": 132,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 131,
              "end": 132,
              "typeName": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 133,
        "end": 145,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 135,
          "end": 145,
          "typeName": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 139,
            "end": 145,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 143,
                "end": 144,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 147,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 168,
        "decorators": [],
        "name": "omit",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 168,
        "end": 186,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 169,
            "end": 185,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 179,
              "end": 185
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
          "start": 187,
          "end": 206,
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 206,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 194,
              "end": 206,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 203,
                "end": 206,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 204,
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 207,
        "end": 234,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 209,
          "end": 234,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 209,
            "end": 212,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 210,
                "end": 211,
                "name": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
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
              "start": 213,
              "end": 219,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 216,
                "end": 219,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 218,
                  "end": 219,
                  "typeName": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 228,
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 228,
                "end": 234,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 229,
                    "end": 230,
                    "typeName": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 230,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 233,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 292,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 292,
            "decorators": [],
            "name": "otherProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 263,
                "end": 292,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 265,
                    "end": 277,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 268,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 278,
                    "end": 290,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 281,
                      "decorators": [],
                      "name": "qwe",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 281,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 283,
                        "end": 290
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 294,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 327,
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 327,
        "end": 330,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 328,
            "end": 329,
            "name": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 331,
          "end": 339,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 339,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 338,
              "end": 339,
              "typeName": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 340,
        "end": 346,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 342,
          "end": 346
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 400,
      "expression": {
        "type": "JSXElement",
        "start": 348,
        "end": 399,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 348,
          "end": 399,
          "name": {
            "type": "JSXIdentifier",
            "start": 349,
            "end": 365,
            "name": "GenericComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 366,
              "end": 396,
              "argument": {
                "type": "CallExpression",
                "start": 370,
                "end": 395,
                "callee": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 374,
                  "decorators": [],
                  "name": "omit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "start": 375,
                    "end": 382,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 376,
                        "end": 381,
                        "value": "bar",
                        "raw": "'bar'"
                      }
                    ]
                  },
                  {
                    "type": "Identifier",
                    "start": 384,
                    "end": 394,
                    "decorators": [],
                    "name": "otherProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
