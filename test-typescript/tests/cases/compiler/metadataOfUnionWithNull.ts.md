__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 503,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "PropDeco",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 32,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 32,
                "name": "Object",
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
        {
          "type": "Identifier",
          "start": 34,
          "end": 58,
          "name": "propKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 43,
              "end": 58,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 76,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 503,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 503,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 92,
                "end": 101,
                "expression": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 101,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 121,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 109,
                "end": 121,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 109,
                    "end": 114,
                    "literal": {
                      "type": "Literal",
                      "start": 109,
                      "end": 114,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 117,
                    "end": 121
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 128,
                "end": 137,
                "expression": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 137,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 157,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 145,
                "end": 157,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 145,
                    "end": 149,
                    "literal": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 152,
                    "end": 157
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 164,
                "end": 173,
                "expression": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 173,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 198,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 181,
                "end": 198,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 181,
                    "end": 186,
                    "literal": {
                      "type": "Literal",
                      "start": 181,
                      "end": 186,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 189,
                    "end": 198
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 205,
                "end": 214,
                "expression": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 214,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 226,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 222,
                "end": 226
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 233,
                "end": 242,
                "expression": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 242,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 255,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 250,
                "end": 255
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 289,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 262,
                "end": 271,
                "expression": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 271,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 288,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 279,
                "end": 288
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 329,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 295,
                "end": 304,
                "expression": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 304,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 328,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 312,
                "end": 328,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 312,
                    "end": 321
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 324,
                    "end": 328
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 335,
            "end": 366,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 335,
                "end": 344,
                "expression": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 344,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 365,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 352,
                "end": 365,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 352,
                    "end": 358
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 361,
                    "end": 365
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 372,
            "end": 400,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 372,
                "end": 381,
                "expression": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 381,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 399,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 389,
                "end": 399,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 389,
                    "end": 395
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 398,
                    "end": 399,
                    "typeName": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 399,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 406,
            "end": 432,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 406,
                "end": 415,
                "expression": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 415,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 431,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 423,
                "end": 431,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 423,
                    "end": 424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 423,
                      "end": 424,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 427,
                    "end": 431
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 438,
            "end": 464,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 438,
                "end": 447,
                "expression": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 447,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 463,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 455,
                "end": 463,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 455,
                    "end": 459
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 470,
            "end": 501,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 470,
                "end": 479,
                "expression": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 479,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 500,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 487,
                "end": 500,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 487,
                    "end": 491
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 494,
                    "end": 500
                  }
                ]
              }
            },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
