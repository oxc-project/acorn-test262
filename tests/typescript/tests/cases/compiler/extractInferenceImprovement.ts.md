__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProperty2",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 95
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
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
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
                  "start": 115,
                  "end": 116
                },
                "typeArguments": null,
                "start": 115,
                "end": 116
              },
              "start": 109,
              "end": 116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 116
          }
        ],
        "start": 95,
        "end": 117
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "start": 123,
                "end": 124
              },
              "typeArguments": null,
              "start": 123,
              "end": 124
            },
            "start": 121,
            "end": 124
          },
          "start": 118,
          "end": 124
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    },
                    "typeArguments": null,
                    "start": 139,
                    "end": 140
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 142,
                    "end": 148
                  }
                ],
                "start": 138,
                "end": 149
              },
              "start": 131,
              "end": 149
            },
            "start": 129,
            "end": 149
          },
          "start": 126,
          "end": 149
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "typeArguments": null,
            "start": 152,
            "end": 153
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeArguments": null,
            "start": 154,
            "end": 155
          },
          "start": 152,
          "end": 156
        },
        "start": 150,
        "end": 156
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 177
              },
              "optional": false,
              "computed": true,
              "start": 170,
              "end": 178
            },
            "start": 163,
            "end": 179
          }
        ],
        "start": 157,
        "end": 181
      },
      "expression": false,
      "start": 74,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProperty3",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 204
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
              "start": 205,
              "end": 206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 206
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 225
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 226,
                    "end": 233
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 235,
                    "end": 241
                  }
                ],
                "start": 225,
                "end": 242
              },
              "start": 218,
              "end": 242
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 242
          }
        ],
        "start": 204,
        "end": 243
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "start": 249,
                "end": 250
              },
              "typeArguments": null,
              "start": 249,
              "end": 250
            },
            "start": 247,
            "end": 250
          },
          "start": 244,
          "end": 250
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "typeArguments": null,
              "start": 257,
              "end": 258
            },
            "start": 255,
            "end": 258
          },
          "start": 252,
          "end": 258
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeArguments": null,
            "start": 261,
            "end": 262
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "typeArguments": null,
            "start": 263,
            "end": 264
          },
          "start": 261,
          "end": 265
        },
        "start": 259,
        "end": 265
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 286
              },
              "optional": false,
              "computed": true,
              "start": 279,
              "end": 287
            },
            "start": 272,
            "end": 288
          }
        ],
        "start": 266,
        "end": 290
      },
      "expression": false,
      "start": 183,
      "end": 290
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 308
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 302,
            "end": 310
          },
          "definite": false,
          "start": 298,
          "end": 310
        }
      ],
      "declare": false,
      "start": 292,
      "end": 311
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 328
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 335,
            "end": 349
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 362,
                "end": 368
              },
              "start": 360,
              "end": 368
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 369
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 374,
            "end": 386
          }
        ],
        "start": 329,
        "end": 388
      },
      "declare": false,
      "start": 312,
      "end": 388
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 406
                },
                "typeArguments": null,
                "start": 400,
                "end": 406
              },
              "start": 398,
              "end": 406
            },
            "start": 395,
            "end": 406
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 409,
              "end": 411
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 415,
              "end": 418
            },
            "start": 409,
            "end": 418
          },
          "definite": false,
          "start": 395,
          "end": 418
        }
      ],
      "declare": false,
      "start": 389,
      "end": 419
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 431,
                "end": 437
              },
              "start": 429,
              "end": 437
            },
            "start": 425,
            "end": 437
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 437
        }
      ],
      "declare": false,
      "start": 421,
      "end": 438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 459
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 474
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 478
            },
            {
              "type": "Literal",
              "value": "first",
              "raw": "'first'",
              "start": 480,
              "end": 487
            }
          ],
          "optional": false,
          "start": 462,
          "end": 488
        },
        "start": 455,
        "end": 488
      },
      "directive": null,
      "start": 455,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 495
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 510
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 514
            },
            {
              "type": "Literal",
              "value": "first",
              "raw": "'first'",
              "start": 516,
              "end": 523
            }
          ],
          "optional": false,
          "start": 498,
          "end": 524
        },
        "start": 491,
        "end": 524
      },
      "directive": null,
      "start": 491,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 546
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 561
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 565
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            }
          ],
          "optional": false,
          "start": 549,
          "end": 569
        },
        "start": 542,
        "end": 569
      },
      "directive": null,
      "start": 542,
      "end": 570
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 576
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 591
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 595
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            }
          ],
          "optional": false,
          "start": 579,
          "end": 599
        },
        "start": 572,
        "end": 599
      },
      "directive": null,
      "start": 572,
      "end": 600
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 74,
  "end": 600
}
```
