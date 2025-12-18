__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 33,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 38,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 88,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "TestObject",
    "start": 135,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "''",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 197,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 220,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "TestProps",
    "start": 230,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 268,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 296,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "TestProps",
    "start": 320,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 352,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "TestObject",
    "start": 370,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 385,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "el1",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "JSXIdentifier",
    "value": "Test",
    "start": 398,
    "end": 402
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "JSXText",
    "value": "\"c\"",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 429,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "el2",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 441,
    "end": 442
  },
  {
    "type": "JSXIdentifier",
    "value": "Test",
    "start": 442,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "TestObject",
    "start": 447,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "JSXText",
    "value": "\"c\"",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  }
]
```
