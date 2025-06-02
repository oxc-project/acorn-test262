__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 587,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 68,
        "end": 95,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 81,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 80,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 79,
                "end": 80,
                "literal": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 93,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 91,
                "end": 92,
                "literal": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 117,
        "decorators": [],
        "name": "keyContaining1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 135,
              "end": 141
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 160,
              "end": 169,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 169,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "start": 172,
              "end": 181,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 187,
        "end": 311,
        "checkType": {
          "type": "TSTypeReference",
          "start": 187,
          "end": 191,
          "typeName": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 200,
          "end": 227,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 227,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 218,
              "end": 227,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 227,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 234,
          "end": 299,
          "checkType": {
            "type": "TSTypeReference",
            "start": 234,
            "end": 237,
            "typeName": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 246,
            "end": 272,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 246,
                "end": 249,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 255,
                "end": 258,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 261,
                "end": 264,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 270,
                "end": 272,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              },
              {
                "type": "TSTypeReference",
                "start": 258,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 261,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              }
            ]
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 279,
            "end": 287,
            "objectType": {
              "type": "TSTypeReference",
              "start": 279,
              "end": 282,
              "typeName": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 283,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 294,
            "end": 299
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 306,
          "end": 311
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 314,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 324,
        "end": 345,
        "typeName": {
          "type": "Identifier",
          "start": 324,
          "end": 338,
          "decorators": [],
          "name": "keyContaining1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 338,
          "end": 345,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 339,
              "end": 344,
              "literal": {
                "type": "Literal",
                "start": 339,
                "end": 344,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 354,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 373,
        "decorators": [],
        "name": "keyContaining2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 373,
        "end": 440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 379,
            "end": 397,
            "name": {
              "type": "Identifier",
              "start": 379,
              "end": 382,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 391,
              "end": 397
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 437,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 407,
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 416,
              "end": 425,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 422,
                "end": 425,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 425,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "start": 428,
              "end": 437,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 434,
                "end": 437,
                "typeName": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 443,
        "end": 546,
        "checkType": {
          "type": "TSTypeReference",
          "start": 443,
          "end": 447,
          "typeName": {
            "type": "Identifier",
            "start": 443,
            "end": 447,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 456,
          "end": 460,
          "typeName": {
            "type": "Identifier",
            "start": 456,
            "end": 460,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 467,
          "end": 534,
          "checkType": {
            "type": "TSTypeReference",
            "start": 467,
            "end": 471,
            "typeName": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 480,
            "end": 506,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 480,
                "end": 483,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 489,
                "end": 492,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 495,
                "end": 498,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 504,
                "end": 506,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 483,
                "end": 489
              },
              {
                "type": "TSTypeReference",
                "start": 492,
                "end": 495,
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 495,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              }
            ]
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 513,
            "end": 522,
            "objectType": {
              "type": "TSTypeReference",
              "start": 513,
              "end": 516,
              "typeName": {
                "type": "Identifier",
                "start": 513,
                "end": 516,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 517,
              "end": 521,
              "typeName": {
                "type": "Identifier",
                "start": 517,
                "end": 521,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 529,
            "end": 534
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 541,
          "end": 546
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 549,
      "end": 581,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 556,
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 559,
        "end": 580,
        "typeName": {
          "type": "Identifier",
          "start": 559,
          "end": 573,
          "decorators": [],
          "name": "keyContaining2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 573,
          "end": 580,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 574,
              "end": 579,
              "literal": {
                "type": "Literal",
                "start": 574,
                "end": 579,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
