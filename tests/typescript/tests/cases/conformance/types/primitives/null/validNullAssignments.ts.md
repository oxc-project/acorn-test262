__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 16,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              },
              "start": 27,
              "end": 36
            },
            "start": 26,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 39,
            "end": 43
          },
          "definite": false,
          "start": 26,
          "end": 43
        }
      ],
      "declare": false,
      "start": 22,
      "end": 44
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 52,
                "end": 58
              },
              "start": 50,
              "end": 58
            },
            "start": 49,
            "end": 58
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 61,
            "end": 65
          },
          "definite": false,
          "start": 49,
          "end": 65
        }
      ],
      "declare": false,
      "start": 45,
      "end": 66
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 74,
                "end": 78
              },
              "start": 72,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 81,
            "end": 85
          },
          "definite": false,
          "start": 71,
          "end": 85
        }
      ],
      "declare": false,
      "start": 67,
      "end": 86
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 111
                },
                "typeArguments": null,
                "start": 95,
                "end": 111
              },
              "start": 93,
              "end": 111
            },
            "start": 92,
            "end": 111
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 114,
            "end": 118
          },
          "definite": false,
          "start": 92,
          "end": 118
        }
      ],
      "declare": false,
      "start": 88,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 124,
          "end": 128
        },
        "start": 120,
        "end": 128
      },
      "directive": null,
      "start": 120,
      "end": 129
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 143
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "initializer": null,
            "computed": false,
            "start": 146,
            "end": 147
          }
        ],
        "start": 144,
        "end": 149
      },
      "const": false,
      "declare": false,
      "start": 137,
      "end": 149
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 153
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 156,
          "end": 160
        },
        "start": 150,
        "end": 160
      },
      "directive": null,
      "start": 150,
      "end": 161
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 179
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 182,
            "end": 193
          }
        ],
        "start": 180,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 195
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "typeArguments": null,
                "start": 203,
                "end": 204
              },
              "start": 201,
              "end": 204
            },
            "start": 200,
            "end": 204
          },
          "init": null,
          "definite": false,
          "start": 200,
          "end": 204
        }
      ],
      "declare": false,
      "start": 196,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 207
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 210,
          "end": 214
        },
        "start": 206,
        "end": 214
      },
      "directive": null,
      "start": 206,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 226,
          "end": 230
        },
        "start": 222,
        "end": 230
      },
      "directive": null,
      "start": 222,
      "end": 231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 253
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              },
              "start": 259,
              "end": 267
            },
            "accessibility": null,
            "static": false,
            "start": 256,
            "end": 267
          }
        ],
        "start": 254,
        "end": 269
      },
      "declare": false,
      "start": 242,
      "end": 269
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "typeArguments": null,
                "start": 277,
                "end": 278
              },
              "start": 275,
              "end": 278
            },
            "start": 274,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 278
        }
      ],
      "declare": false,
      "start": 270,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 281
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 284,
          "end": 288
        },
        "start": 280,
        "end": 288
      },
      "directive": null,
      "start": 280,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 300,
          "end": 304
        },
        "start": 296,
        "end": 304
      },
      "directive": null,
      "start": 296,
      "end": 305
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 327
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 345,
                    "end": 346
                  },
                  "definite": false,
                  "start": 341,
                  "end": 346
                }
              ],
              "declare": false,
              "start": 337,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 330,
            "end": 347
          }
        ],
        "start": 328,
        "end": 349
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 316,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 351
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 354,
          "end": 358
        },
        "start": 350,
        "end": 358
      },
      "directive": null,
      "start": 350,
      "end": 359
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 380
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 384,
                        "end": 388
                      },
                      "start": 382,
                      "end": 388
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 379,
                    "end": 388
                  }
                ],
                "start": 377,
                "end": 390
              },
              "start": 375,
              "end": 390
            },
            "start": 374,
            "end": 390
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 393,
            "end": 397
          },
          "definite": false,
          "start": 374,
          "end": 397
        }
      ],
      "declare": false,
      "start": 370,
      "end": 398
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 410
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
              "start": 411,
              "end": 412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 412
          }
        ],
        "start": 410,
        "end": 413
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 417,
                "end": 418
              },
              "typeArguments": null,
              "start": 417,
              "end": 418
            },
            "start": 415,
            "end": 418
          },
          "start": 414,
          "end": 418
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 430,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "directive": null,
            "start": 426,
            "end": 435
          }
        ],
        "start": 420,
        "end": 437
      },
      "expression": false,
      "start": 400,
      "end": 437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 439
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 442,
          "end": 446
        },
        "start": 438,
        "end": 446
      },
      "directive": null,
      "start": 438,
      "end": 447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
