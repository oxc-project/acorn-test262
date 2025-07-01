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
        "name": "Validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 67
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "start": 71,
            "end": 83
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 108
                },
                "typeArguments": null,
                "start": 104,
                "end": 108
              },
              "start": 102,
              "end": 108
            },
            "start": 98,
            "end": 108
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              },
              {
                "type": "TSBooleanKeyword",
                "start": 122,
                "end": 129
              }
            ],
            "start": 113,
            "end": 129
          },
          "start": 110,
          "end": 129
        },
        "start": 70,
        "end": 129
      },
      "declare": false,
      "start": 54,
      "end": 130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FullRule",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 149
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
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 166,
                    "end": 172
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 181
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 181
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 192
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 192
                  }
                ],
                "start": 166,
                "end": 192
              },
              "start": 164,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 156,
            "end": 193
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 219,
                              "end": 220
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 222,
                                "end": 228
                              },
                              "start": 220,
                              "end": 228
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 219,
                            "end": 228
                          }
                        ],
                        "start": 218,
                        "end": 229
                      },
                      "start": 216,
                      "end": 229
                    },
                    "start": 211,
                    "end": 229
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 234,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                "start": 210,
                "end": 238
              },
              "start": 208,
              "end": 238
            },
            "accessibility": null,
            "static": false,
            "start": 198,
            "end": 239
          }
        ],
        "start": 150,
        "end": 241
      },
      "declare": false,
      "start": 131,
      "end": 241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rule",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 255,
            "end": 261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FullRule",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 272
            },
            "typeArguments": null,
            "start": 264,
            "end": 272
          }
        ],
        "start": 255,
        "end": 272
      },
      "declare": false,
      "start": 243,
      "end": 273
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
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 292
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 298
                        },
                        "typeArguments": null,
                        "start": 294,
                        "end": 298
                      },
                      "start": 292,
                      "end": 298
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 287,
                    "end": 298
                  }
                ],
                "start": 286,
                "end": 299
              },
              "start": 284,
              "end": 299
            },
            "start": 281,
            "end": 299
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
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
                        "name": "validate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 333
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 338
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 342
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 346
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 351,
                          "end": 356
                        },
                        "id": null,
                        "generator": false,
                        "start": 335,
                        "end": 356
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 325,
                      "end": 356
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalize",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 375
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 377,
                            "end": 382
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 391
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 393
                          },
                          "optional": false,
                          "computed": false,
                          "start": 386,
                          "end": 393
                        },
                        "id": null,
                        "generator": false,
                        "start": 377,
                        "end": 393
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 366,
                      "end": 393
                    }
                  ],
                  "start": 315,
                  "end": 400
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 308,
                "end": 400
              }
            ],
            "start": 302,
            "end": 402
          },
          "definite": false,
          "start": 281,
          "end": 402
        }
      ],
      "declare": false,
      "start": 275,
      "end": 403
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 403
}
```
