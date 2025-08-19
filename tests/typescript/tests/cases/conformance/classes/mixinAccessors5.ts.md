__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "basicMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 84
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 85,
              "end": 86
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 95,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 101
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 113,
              "end": 119
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 119
          }
        ],
        "start": 84,
        "end": 120
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            "start": 125,
            "end": 128
          },
          "start": 124,
          "end": 128
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "start": 133,
            "end": 136
          },
          "start": 132,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "typeArguments": null,
              "start": 141,
              "end": 142
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "typeArguments": null,
              "start": 145,
              "end": 146
            }
          ],
          "start": 141,
          "end": 146
        },
        "start": 139,
        "end": 146
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 147
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetterA",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 172
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 188
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 196
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 198,
                        "end": 201
                      },
                      "start": 198,
                      "end": 203
                    },
                    "start": 196,
                    "end": 203
                  },
                  "value": null,
                  "start": 189,
                  "end": 203
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 188,
              "end": 205
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 177,
            "end": 205
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inCompendium",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 225
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 229,
                  "end": 236
                },
                "start": 227,
                "end": 236
              },
              "body": null,
              "expression": false,
              "start": 225,
              "end": 237
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 209,
            "end": 237
          }
        ],
        "start": 173,
        "end": 239
      },
      "abstract": false,
      "declare": true,
      "start": 151,
      "end": 239
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetterB",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 264
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 280
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 288
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 290,
                        "end": 293
                      },
                      "start": 290,
                      "end": 295
                    },
                    "start": 288,
                    "end": 295
                  },
                  "value": null,
                  "start": 281,
                  "end": 295
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 280,
              "end": 297
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 269,
            "end": 297
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inCompendium",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 317
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 321,
                  "end": 328
                },
                "start": 319,
                "end": 328
              },
              "body": null,
              "expression": false,
              "start": 317,
              "end": 329
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 301,
            "end": 329
          }
        ],
        "start": 265,
        "end": 331
      },
      "abstract": false,
      "declare": true,
      "start": 243,
      "end": 331
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 354
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "basicMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 373
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "GetterA",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 381
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "GetterB",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 390
          }
        ],
        "optional": false,
        "start": 363,
        "end": 391
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inCompendium",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 421
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 425,
                  "end": 432
                },
                "start": 423,
                "end": 432
              },
              "body": null,
              "expression": false,
              "start": 421,
              "end": 433
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 396,
            "end": 433
          }
        ],
        "start": 392,
        "end": 435
      },
      "abstract": false,
      "declare": true,
      "start": 335,
      "end": 435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 438
}
```
