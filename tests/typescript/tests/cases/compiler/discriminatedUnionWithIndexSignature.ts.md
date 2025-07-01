__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionAltA",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 26
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "text",
                    "raw": "'text'",
                    "start": 40,
                    "end": 46
                  },
                  "start": 40,
                  "end": 46
                },
                "start": 38,
                "end": 46
              },
              "accessibility": null,
              "static": false,
              "start": 33,
              "end": 47
            }
          ],
          "start": 27,
          "end": 49
        },
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionAltB",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 77
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 88
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "image",
                        "raw": "'image'",
                        "start": 91,
                        "end": 98
                      },
                      "start": 91,
                      "end": 98
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "video",
                        "raw": "'video'",
                        "start": 101,
                        "end": 108
                      },
                      "start": 101,
                      "end": 108
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "document",
                        "raw": "'document'",
                        "start": 111,
                        "end": 121
                      },
                      "start": 111,
                      "end": 121
                    }
                  ],
                  "start": 91,
                  "end": 121
                },
                "start": 89,
                "end": 121
              },
              "accessibility": null,
              "static": false,
              "start": 84,
              "end": 122
            }
          ],
          "start": 78,
          "end": 124
        },
        "declare": false,
        "start": 58,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 51,
      "end": 124
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 148
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
                "name": "UnionAltA",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 160
              },
              "typeArguments": null,
              "start": 151,
              "end": 160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionAltB",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 172
              },
              "typeArguments": null,
              "start": 163,
              "end": 172
            }
          ],
          "start": 151,
          "end": 172
        },
        "declare": false,
        "start": 133,
        "end": 173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 126,
      "end": 173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MapOrSingleton",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 201
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 221,
                      "end": 232
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValueUnion",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 235,
                      "end": 245
                    },
                    "start": 233,
                    "end": 245
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 220,
                  "end": 246
                }
              ],
              "start": 210,
              "end": 252
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 269
              },
              "typeArguments": null,
              "start": 259,
              "end": 269
            }
          ],
          "start": 208,
          "end": 269
        },
        "declare": false,
        "start": 182,
        "end": 270
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 175,
      "end": 270
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
            "name": "withoutAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 308
                },
                "typeArguments": null,
                "start": 294,
                "end": 308
              },
              "start": 292,
              "end": 308
            },
            "start": 278,
            "end": 308
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 317,
                  "end": 318
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 334
                      },
                      "value": {
                        "type": "Literal",
                        "value": "text",
                        "raw": "'text'",
                        "start": 336,
                        "end": 342
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 330,
                      "end": 342
                    }
                  ],
                  "start": 320,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 317,
                "end": 362
              }
            ],
            "start": 311,
            "end": 365
          },
          "definite": false,
          "start": 278,
          "end": 365
        }
      ],
      "declare": false,
      "start": 272,
      "end": 366
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
            "name": "withAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 401
                },
                "typeArguments": null,
                "start": 387,
                "end": 401
              },
              "start": 385,
              "end": 401
            },
            "start": 374,
            "end": 401
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 410,
                  "end": 411
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 427
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": "text",
                          "raw": "'text'",
                          "start": 429,
                          "end": 435
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 444
                          },
                          "typeArguments": null,
                          "start": 439,
                          "end": 444
                        },
                        "start": 429,
                        "end": 444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 423,
                      "end": 444
                    }
                  ],
                  "start": 413,
                  "end": 451
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 410,
                "end": 451
              }
            ],
            "start": 404,
            "end": 454
          },
          "definite": false,
          "start": 374,
          "end": 454
        }
      ],
      "declare": false,
      "start": 368,
      "end": 455
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 455
}
```
