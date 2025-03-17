__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 493,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 38,
        "name": "handler1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 41,
        "end": 51,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 44,
          "end": 51,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 47,
            "end": 51
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 102,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 60,
        "end": 102,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 72,
          "name": "I1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 73,
          "end": 102,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 79,
              "end": 100,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 89,
                "name": "getHandler",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 91,
                  "end": 99,
                  "typeName": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 99,
                    "name": "handler1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 116,
      "end": 150,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 123,
        "end": 150,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 136,
          "name": "handler2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 139,
          "end": 149,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 149,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 145,
              "end": 149
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 178,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "name": "handler3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 194,
        "end": 204,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 197,
          "end": 204,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 200,
            "end": 204
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 206,
      "end": 268,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 213,
        "end": 268,
        "id": {
          "type": "Identifier",
          "start": 223,
          "end": 225,
          "name": "I3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 225,
          "end": 245,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 226,
              "end": 244,
              "name": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 244,
                  "name": "handler3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 246,
          "end": 268,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 252,
              "end": 266,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 252,
                "end": 262,
                "name": "getHandler",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 262,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 264,
                  "end": 265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 264,
                    "end": 265,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 312,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 325,
        "name": "handler4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 328,
        "end": 338,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 331,
          "end": 338,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 334,
            "end": 338
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 353,
        "name": "handler5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 356,
        "end": 379,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 356,
            "end": 364,
            "typeName": {
              "type": "Identifier",
              "start": 356,
              "end": 364,
              "name": "handler4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSFunctionType",
            "start": 368,
            "end": 378,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 378,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 372,
                "end": 378
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 381,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 396,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 396,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 386,
              "end": 396,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 388,
                "end": 396,
                "typeName": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 396,
                  "name": "handler5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 398,
      "end": 402,
      "expression": {
        "type": "CallExpression",
        "start": 398,
        "end": 401,
        "callee": {
          "type": "Identifier",
          "start": 398,
          "end": 399,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 429,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 442,
        "name": "handler6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 445,
        "end": 455,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 448,
          "end": 455,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 451,
            "end": 455
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 479,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 479,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 469,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 469,
                  "end": 479,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 478,
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 478,
                        "name": "handler6",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 481,
      "end": 488,
      "expression": {
        "type": "CallExpression",
        "start": 481,
        "end": 487,
        "callee": {
          "type": "MemberExpression",
          "start": 481,
          "end": 485,
          "object": {
            "type": "Identifier",
            "start": 481,
            "end": 482,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 483,
            "end": 484,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
