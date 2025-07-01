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
        "name": "Registry",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 70
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 84
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 86,
                        "end": 88
                      },
                      "start": 84,
                      "end": 88
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 82,
                    "end": 88
                  }
                ],
                "start": 80,
                "end": 90
              },
              "start": 78,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 91
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
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
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 103,
                        "end": 105
                      },
                      "start": 101,
                      "end": 105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 99,
                    "end": 105
                  }
                ],
                "start": 97,
                "end": 107
              },
              "start": 95,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 108
          }
        ],
        "start": 73,
        "end": 110
      },
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keyof",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 123
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
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "start": 129,
            "end": 136
          },
          {
            "type": "TSStringKeyword",
            "start": 139,
            "end": 145
          }
        ],
        "start": 129,
        "end": 145
      },
      "declare": false,
      "start": 113,
      "end": 146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 167
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
              "name": "Scope",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 176
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 190
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Registry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 191,
                    "end": 199
                  }
                ],
                "start": 190,
                "end": 200
              },
              "start": 185,
              "end": 200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 171,
            "end": 200
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 209
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 223
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Registry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 232
                      },
                      "typeArguments": null,
                      "start": 224,
                      "end": 232
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Scope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 238
                      },
                      "typeArguments": null,
                      "start": 233,
                      "end": 238
                    },
                    "start": 224,
                    "end": 239
                  }
                ],
                "start": 223,
                "end": 240
              },
              "start": 218,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 240
          }
        ],
        "start": 167,
        "end": 243
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "eventPath",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 255,
                  "end": 258
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ":",
                    "cooked": ":"
                  },
                  "tail": false,
                  "start": 263,
                  "end": 267
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 272,
                  "end": 274
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Scope",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 263
                  },
                  "typeArguments": null,
                  "start": 258,
                  "end": 263
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 272
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 272
                }
              ],
              "start": 255,
              "end": 274
            },
            "start": 253,
            "end": 274
          },
          "start": 244,
          "end": 274
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 277,
          "end": 281
        },
        "start": 275,
        "end": 281
      },
      "body": null,
      "expression": false,
      "start": 148,
      "end": 282
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 295
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
              "name": "Scope",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 304
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 318
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Registry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 327
                  }
                ],
                "start": 318,
                "end": 328
              },
              "start": 313,
              "end": 328
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 299,
            "end": 328
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 337
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 351
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Registry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 352,
                      "end": 360
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Scope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 366
                      },
                      "typeArguments": null,
                      "start": 361,
                      "end": 366
                    },
                    "start": 352,
                    "end": 367
                  }
                ],
                "start": 351,
                "end": 368
              },
              "start": 346,
              "end": 368
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 368
          }
        ],
        "start": 295,
        "end": 371
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "scope",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Scope",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 384
              },
              "typeArguments": null,
              "start": 379,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "start": 372,
          "end": 384
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "event",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Event",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 398
              },
              "typeArguments": null,
              "start": 393,
              "end": 398
            },
            "start": 391,
            "end": 398
          },
          "start": 386,
          "end": 398
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 406
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 407,
                      "end": 410
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ":",
                        "cooked": ":"
                      },
                      "tail": false,
                      "start": 415,
                      "end": 419
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 424,
                      "end": 426
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "scope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 415
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 424
                    }
                  ],
                  "start": 407,
                  "end": 426
                }
              ],
              "optional": false,
              "start": 404,
              "end": 427
            },
            "directive": null,
            "start": 404,
            "end": 428
          }
        ],
        "start": 400,
        "end": 430
      },
      "expression": false,
      "start": 284,
      "end": 430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 430
}
```
