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
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
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
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 52,
              "end": 55
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 55
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 78
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 87,
                    "end": 90
                  }
                ],
                "start": 78,
                "end": 91
              },
              "start": 72,
              "end": 91
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 109,
                    "end": 112
                  }
                ],
                "start": 100,
                "end": 113
              },
              "start": 94,
              "end": 113
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 57,
            "end": 113
          }
        ],
        "start": 47,
        "end": 114
      },
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
              "type": "Literal",
              "value": "__is_argument__",
              "raw": "\"__is_argument__\"",
              "start": 121,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 141,
                  "end": 145
                },
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 146
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
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
                  "start": 158,
                  "end": 159
                },
                "typeArguments": null,
                "start": 158,
                "end": 159
              },
              "start": 156,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 151,
            "end": 160
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 180
                },
                "typeArguments": null,
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 115,
        "end": 183
      },
      "declare": false,
      "start": 34,
      "end": 183
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 211
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
                "start": 212,
                "end": 213
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 216,
                "end": 219
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 212,
              "end": 219
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 237
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 238,
                      "end": 244
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 246,
                      "end": 249
                    }
                  ],
                  "start": 237,
                  "end": 250
                },
                "start": 231,
                "end": 250
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 268,
                      "end": 271
                    }
                  ],
                  "start": 259,
                  "end": 272
                },
                "start": 253,
                "end": 272
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 221,
              "end": 272
            }
          ],
          "start": 211,
          "end": 273
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 282
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
                        "start": 283,
                        "end": 284
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 284
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 287
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 287
                    }
                  ],
                  "start": 282,
                  "end": 288
                },
                "start": 279,
                "end": 288
              },
              "start": 277,
              "end": 288
            },
            "start": 274,
            "end": 288
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 303
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 310
                    },
                    "optional": false,
                    "computed": false,
                    "start": 300,
                    "end": 310
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 314,
                    "end": 316
                  },
                  "start": 300,
                  "end": 316
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 321,
                  "end": 322
                },
                "start": 299,
                "end": 322
              },
              "start": 292,
              "end": 322
            }
          ],
          "start": 290,
          "end": 324
        },
        "expression": false,
        "start": 192,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 185,
      "end": 324
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 325
}
```
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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./input.js",
            "raw": "'./input.js'",
            "start": 24,
            "end": 36
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 48
          },
          "typeArguments": null,
          "start": 17,
          "end": 48
        },
        "typeArguments": null,
        "start": 10,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 57
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./input.js",
            "raw": "'./input.js'",
            "start": 74,
            "end": 86
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 98
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "start": 112,
                          "end": 119
                        },
                        "start": 112,
                        "end": 119
                      },
                      "start": 110,
                      "end": 119
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 119
                  }
                ],
                "start": 104,
                "end": 121
              }
            ],
            "start": 98,
            "end": 122
          },
          "start": 67,
          "end": 122
        },
        "typeArguments": null,
        "start": 60,
        "end": 122
      },
      "declare": false,
      "start": 50,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
