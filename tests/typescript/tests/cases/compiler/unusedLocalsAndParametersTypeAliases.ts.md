__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler1",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 38
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 47,
            "end": 51
          },
          "start": 44,
          "end": 51
        },
        "start": 41,
        "end": 51
      },
      "declare": false,
      "start": 25,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 72
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getHandler",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 89
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handler1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 99
                  },
                  "typeArguments": null,
                  "start": 91,
                  "end": 99
                },
                "start": 89,
                "end": 99
              },
              "accessibility": null,
              "static": false,
              "start": 79,
              "end": 100
            }
          ],
          "start": 73,
          "end": 102
        },
        "declare": false,
        "start": 60,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 53,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handler2",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 136
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 145,
              "end": 149
            },
            "start": 142,
            "end": 149
          },
          "start": 139,
          "end": 149
        },
        "declare": false,
        "start": 123,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 116,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler3",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 191
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 200,
            "end": 204
          },
          "start": 197,
          "end": 204
        },
        "start": 194,
        "end": 204
      },
      "declare": false,
      "start": 178,
      "end": 205
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I3",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 225
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handler3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 244
                },
                "typeArguments": null,
                "start": 236,
                "end": 244
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 226,
              "end": 244
            }
          ],
          "start": 225,
          "end": 245
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getHandler",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 262
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 264,
                  "end": 265
                },
                "start": 262,
                "end": 265
              },
              "accessibility": null,
              "static": false,
              "start": 252,
              "end": 266
            }
          ],
          "start": 246,
          "end": 268
        },
        "declare": false,
        "start": 213,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 206,
      "end": 268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler4",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 325
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 334,
            "end": 338
          },
          "start": 331,
          "end": 338
        },
        "start": 328,
        "end": 338
      },
      "declare": false,
      "start": 312,
      "end": 339
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler5",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 353
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler4",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 364
            },
            "typeArguments": null,
            "start": 356,
            "end": 364
          },
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 372,
                "end": 378
              },
              "start": 370,
              "end": 378
            },
            "start": 368,
            "end": 378
          }
        ],
        "start": 356,
        "end": 379
      },
      "declare": false,
      "start": 340,
      "end": 380
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handler5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 396
                },
                "typeArguments": null,
                "start": 388,
                "end": 396
              },
              "start": 386,
              "end": 396
            },
            "start": 385,
            "end": 396
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 396
        }
      ],
      "declare": false,
      "start": 381,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 398,
        "end": 401
      },
      "directive": null,
      "start": 398,
      "end": 402
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler6",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 442
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 451,
            "end": 455
          },
          "start": 448,
          "end": 455
        },
        "start": 445,
        "end": 455
      },
      "declare": false,
      "start": 429,
      "end": 456
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 469
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "handler6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 478
                      },
                      "typeArguments": null,
                      "start": 470,
                      "end": 478
                    }
                  ],
                  "start": 469,
                  "end": 479
                },
                "start": 464,
                "end": 479
              },
              "start": 462,
              "end": 479
            },
            "start": 461,
            "end": 479
          },
          "init": null,
          "definite": false,
          "start": 461,
          "end": 479
        }
      ],
      "declare": false,
      "start": 457,
      "end": 480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 482
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 483,
            "end": 484
          },
          "optional": false,
          "computed": true,
          "start": 481,
          "end": 485
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 481,
        "end": 487
      },
      "directive": null,
      "start": 481,
      "end": 488
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 493
}
```
