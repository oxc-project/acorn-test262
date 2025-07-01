__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 88
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 97,
                "end": 101
              },
              "start": 95,
              "end": 101
            },
            "start": 93,
            "end": 102
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 120,
                "end": 124
              },
              "start": 118,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 125
          }
        ],
        "start": 89,
        "end": 127
      },
      "declare": false,
      "start": 70,
      "end": 127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 153
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 165
            },
            "typeArguments": null,
            "start": 157,
            "end": 165
          },
          "start": 155,
          "end": 165
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 184
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 187,
                "end": 189
              },
              "expression": false,
              "start": 170,
              "end": 189
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 197
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "optional": false,
                  "computed": false,
                  "start": 192,
                  "end": 202
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 205,
                  "end": 209
                },
                "start": 192,
                "end": 209
              },
              "directive": null,
              "start": 192,
              "end": 210
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 225
              },
              "start": 213,
              "end": 226
            }
          ],
          "start": 166,
          "end": 228
        },
        "expression": false,
        "start": 136,
        "end": 228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 129,
      "end": 228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNull2",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 249
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              },
              "start": 256,
              "end": 262
            },
            "start": 254,
            "end": 263
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 272,
                    "end": 278
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 281,
                    "end": 285
                  }
                ],
                "start": 272,
                "end": 285
              },
              "start": 270,
              "end": 285
            },
            "accessibility": null,
            "static": false,
            "start": 266,
            "end": 286
          }
        ],
        "start": 250,
        "end": 288
      },
      "declare": false,
      "start": 230,
      "end": 288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testNull2",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 315
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestNull2",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 328
            },
            "typeArguments": null,
            "start": 319,
            "end": 328
          },
          "start": 317,
          "end": 328
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 347
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 350,
                "end": 352
              },
              "expression": false,
              "start": 333,
              "end": 352
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 360
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 365
                  },
                  "optional": false,
                  "computed": false,
                  "start": 355,
                  "end": 365
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 368,
                  "end": 372
                },
                "start": 355,
                "end": 372
              },
              "directive": null,
              "start": 355,
              "end": 373
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 388
              },
              "start": 376,
              "end": 389
            }
          ],
          "start": 329,
          "end": 391
        },
        "expression": false,
        "start": 297,
        "end": 391
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 290,
      "end": 391
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 416
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 425,
                "end": 429
              },
              "start": 423,
              "end": 429
            },
            "start": 421,
            "end": 430
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 448,
                "end": 457
              },
              "start": 446,
              "end": 457
            },
            "accessibility": null,
            "static": false,
            "start": 433,
            "end": 458
          }
        ],
        "start": 417,
        "end": 460
      },
      "declare": false,
      "start": 393,
      "end": 460
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testUndefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 491
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestUndefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 508
            },
            "typeArguments": null,
            "start": 495,
            "end": 508
          },
          "start": 493,
          "end": 508
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 527
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 530,
                "end": 532
              },
              "expression": false,
              "start": 513,
              "end": 532
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 540
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 545
                  },
                  "optional": false,
                  "computed": false,
                  "start": 535,
                  "end": 545
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 557
                },
                "start": 535,
                "end": 557
              },
              "directive": null,
              "start": 535,
              "end": 558
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 573
              },
              "start": 561,
              "end": 574
            }
          ],
          "start": 509,
          "end": 576
        },
        "expression": false,
        "start": 469,
        "end": 576
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 462,
      "end": 576
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 70,
  "end": 576
}
```
