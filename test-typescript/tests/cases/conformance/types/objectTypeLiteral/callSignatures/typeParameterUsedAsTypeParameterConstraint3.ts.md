__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 422,
  "end": 837,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 422,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 433,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 433,
        "end": 442,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 434,
            "end": 435,
            "name": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 438,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 440,
            "end": 441,
            "name": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 443,
        "end": 507,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 449,
            "end": 454,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 453,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 452,
                "end": 453,
                "typeName": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 453,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 459,
            "end": 464,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 462,
                "end": 463,
                "typeName": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 469,
            "end": 474,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 473,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 472,
                "end": 473,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 479,
            "end": 505,
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 482,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 482,
              "end": 495,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 483,
                  "end": 494,
                  "name": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "W",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 493,
                    "end": 494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 494,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 496,
                "end": 500,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 497,
                  "end": 500,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 499,
                    "end": 500,
                    "typeName": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 500,
                      "name": "W",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 504,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 503,
                "end": 504,
                "typeName": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 504,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 509,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 521,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 521,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 522,
            "end": 523,
            "name": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 525,
            "end": 526,
            "name": {
              "type": "Identifier",
              "start": 525,
              "end": 526,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 528,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 531,
        "end": 595,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 537,
            "end": 542,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 547,
            "end": 552,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 548,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 551,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 550,
                "end": 551,
                "typeName": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 557,
            "end": 562,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 558,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 558,
              "end": 561,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 560,
                "end": 561,
                "typeName": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 567,
            "end": 593,
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 570,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 570,
              "end": 583,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 571,
                  "end": 582,
                  "name": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "name": "W",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 581,
                    "end": 582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 585,
                  "end": 588,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 587,
                    "end": 588,
                    "typeName": {
                      "type": "Identifier",
                      "start": 587,
                      "end": 588,
                      "name": "W",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 592,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 592,
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
