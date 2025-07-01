__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "\"react\"",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionPropertyNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 59
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
              "start": 60,
              "end": 61
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 61
          }
        ],
        "start": 59,
        "end": 62
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "typeArguments": null,
              "start": 79,
              "end": 80
            },
            "start": 73,
            "end": 80
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "typeArguments": null,
                "start": 83,
                "end": 84
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              },
              "start": 83,
              "end": 87
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 104
              },
              "typeArguments": null,
              "start": 96,
              "end": 104
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            },
            "start": 83,
            "end": 116
          },
          "optional": false,
          "readonly": null,
          "start": 65,
          "end": 118
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "typeArguments": null,
            "start": 125,
            "end": 126
          },
          "start": 119,
          "end": 126
        },
        "start": 65,
        "end": 127
      },
      "declare": false,
      "start": 33,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 145
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 164,
              "end": 166
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 152,
            "end": 167
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 184,
              "end": 185
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 172,
            "end": 186
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
              "start": 192,
              "end": 204
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 213,
                "end": 216
              },
              "id": null,
              "generator": false,
              "start": 207,
              "end": 216
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 191,
            "end": 217
          }
        ],
        "start": 146,
        "end": 219
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 239
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
              "start": 240,
              "end": 241
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 240,
            "end": 241
          }
        ],
        "start": 239,
        "end": 242
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
              "name": "model",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 254
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
                  "start": 256,
                  "end": 257
                },
                "typeArguments": null,
                "start": 256,
                "end": 257
              },
              "start": 254,
              "end": 257
            },
            "accessibility": null,
            "static": false,
            "start": 249,
            "end": 258
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 289
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 291
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 291
                    }
                  ],
                  "start": 289,
                  "end": 292
                },
                "start": 268,
                "end": 292
              },
              "start": 266,
              "end": 292
            },
            "accessibility": null,
            "static": false,
            "start": 263,
            "end": 293
          }
        ],
        "start": 243,
        "end": 295
      },
      "declare": false,
      "start": 220,
      "end": 295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 309
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 311
          }
        ],
        "start": 309,
        "end": 312
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 329
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "typeArguments": null,
                    "start": 330,
                    "end": 331
                  }
                ],
                "start": 329,
                "end": 332
              },
              "start": 320,
              "end": 332
            },
            "start": 318,
            "end": 332
          },
          "start": 313,
          "end": 332
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXFragment",
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 343,
                "end": 345
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 345,
                "end": 348
              },
              "start": 343,
              "end": 348
            },
            "start": 336,
            "end": 349
          }
        ],
        "start": 334,
        "end": 351
      },
      "expression": false,
      "start": 296,
      "end": 351
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 363
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 380
            },
            "typeArguments": null,
            "arguments": [],
            "start": 366,
            "end": 382
          },
          "definite": false,
          "start": 358,
          "end": 382
        }
      ],
      "declare": false,
      "start": 352,
      "end": 383
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "el1",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 394
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Test",
                "start": 398,
                "end": 402
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "model",
                    "start": 403,
                    "end": 408
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 415
                    },
                    "start": 409,
                    "end": 416
                  },
                  "start": 403,
                  "end": 416
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 417,
                    "end": 420
                  },
                  "value": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 421,
                    "end": 424
                  },
                  "start": 417,
                  "end": 424
                }
              ],
              "selfClosing": true,
              "start": 397,
              "end": 427
            },
            "children": [],
            "closingElement": null,
            "start": 397,
            "end": 427
          },
          "definite": false,
          "start": 391,
          "end": 427
        }
      ],
      "declare": false,
      "start": 385,
      "end": 428
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "el2",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 438
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Test",
                "start": 442,
                "end": 446
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 457
                    },
                    "typeArguments": null,
                    "start": 447,
                    "end": 457
                  }
                ],
                "start": 446,
                "end": 458
              },
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "model",
                    "start": 459,
                    "end": 464
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 471
                    },
                    "start": 465,
                    "end": 472
                  },
                  "start": 459,
                  "end": 472
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 473,
                    "end": 476
                  },
                  "value": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 477,
                    "end": 480
                  },
                  "start": 473,
                  "end": 480
                }
              ],
              "selfClosing": true,
              "start": 441,
              "end": 483
            },
            "children": [],
            "closingElement": null,
            "start": 441,
            "end": 483
          },
          "definite": false,
          "start": 435,
          "end": 483
        }
      ],
      "declare": false,
      "start": 429,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 484
}
```
