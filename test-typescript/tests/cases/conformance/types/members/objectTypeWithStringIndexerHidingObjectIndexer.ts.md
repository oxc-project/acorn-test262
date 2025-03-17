__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 142,
  "end": 499,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 158,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 159,
        "end": 187,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 165,
            "end": 185,
            "parameters": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 175,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 196,
            "end": 198,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 208,
            "end": 213,
            "object": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 210,
              "end": 212,
              "value": "",
              "raw": "''"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 236,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 244,
        "end": 289,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 250,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 261,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 255,
                "end": 261
              }
            },
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 267,
            "end": 287,
            "parameters": [
              {
                "type": "Identifier",
                "start": 268,
                "end": 277,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 269,
                  "end": 277,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 271,
                    "end": 277
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 314,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 314,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 317,
            "end": 322,
            "object": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 319,
              "end": 321,
              "value": "",
              "raw": "''"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 325,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 336,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 382,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 355,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 346,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 354,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 360,
            "end": 380,
            "parameters": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 370,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 370,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 364,
                    "end": 370
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 373,
                "end": 379
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 391,
                "typeName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 407,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 407,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 401,
                "end": 407
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 410,
            "end": 415,
            "object": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 412,
              "end": 414,
              "value": "",
              "raw": "''"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 471,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 424,
              "end": 471,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 426,
                "end": 471,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 432,
                    "end": 444,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 435,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 435,
                      "end": 443,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 437,
                        "end": 443
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 449,
                    "end": 469,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 450,
                        "end": 459,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 451,
                          "end": 459,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 453,
                            "end": 459
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 460,
                      "end": 468,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 462,
                        "end": 468
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 486,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 486,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 489,
            "end": 495,
            "object": {
              "type": "Identifier",
              "start": 489,
              "end": 491,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 492,
              "end": 494,
              "value": "",
              "raw": "''"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
