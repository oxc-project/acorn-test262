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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 38,
        "decorators": [],
        "name": "handler1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 41,
        "end": 51,
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
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 102,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 60,
        "end": 102,
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
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 89,
                "decorators": [],
                "name": "getHandler",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "handler1",
                    "optional": false
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
          "start": 70,
          "end": 72,
          "decorators": [],
          "name": "I1",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 116,
      "end": 150,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 123,
        "end": 150,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 136,
          "decorators": [],
          "name": "handler2",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 139,
          "end": 149,
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
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 178,
      "end": 205,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "decorators": [],
        "name": "handler3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 194,
        "end": 204,
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
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 206,
      "end": 268,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 213,
        "end": 268,
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
              "key": {
                "type": "Identifier",
                "start": 252,
                "end": 262,
                "decorators": [],
                "name": "getHandler",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
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
          "start": 223,
          "end": 225,
          "decorators": [],
          "name": "I3",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 225,
          "end": 245,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 226,
              "end": 244,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 244,
                  "decorators": [],
                  "name": "handler3",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 312,
      "end": 339,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 325,
        "decorators": [],
        "name": "handler4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 328,
        "end": 338,
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 380,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 353,
        "decorators": [],
        "name": "handler5",
        "optional": false
      },
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
              "decorators": [],
              "name": "handler4",
              "optional": false
            }
          },
          {
            "type": "TSFunctionType",
            "start": 368,
            "end": 378,
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
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 396,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "handler5",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 398,
      "end": 402,
      "expression": {
        "type": "CallExpression",
        "start": 398,
        "end": 401,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 398,
          "end": 399,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 429,
      "end": 456,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 442,
        "decorators": [],
        "name": "handler6",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 445,
        "end": 455,
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
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 479,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 479,
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
                        "decorators": [],
                        "name": "handler6",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 469,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 481,
      "end": 488,
      "expression": {
        "type": "CallExpression",
        "start": 481,
        "end": 487,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 481,
          "end": 485,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 481,
            "end": 482,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 483,
            "end": 484,
            "raw": "0",
            "value": 0
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
