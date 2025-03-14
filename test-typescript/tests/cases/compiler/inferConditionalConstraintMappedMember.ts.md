inferConditionalConstraintMappedMember.ts
```json
{
  "type": "Program",
  "start": 52,
  "end": 670,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 52,
      "end": 193,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 79,
        "decorators": [],
        "name": "KeysWithoutStringIndex",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 89,
        "end": 193,
        "checkType": {
          "type": "TSMappedType",
          "start": 89,
          "end": 137,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 97,
            "end": 104,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 107,
            "end": 135,
            "checkType": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 122,
              "end": 123,
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 126,
              "end": 131
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 146,
          "end": 173,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 154,
            "end": 161,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "_",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSInferType",
            "start": 164,
            "end": 171,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 170,
              "end": 171,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 188,
          "end": 193
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 181,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 351,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 272,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 275,
        "end": 351,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 297,
          "end": 351,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 298,
              "end": 350,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 300,
                  "end": 324,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 301,
                      "end": 314,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 306,
                        "end": 314,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 308,
                          "end": 314
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 325,
                  "end": 337,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 328,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 328,
                    "end": 336,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 330,
                      "end": 336
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 338,
                  "end": 348,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 341,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 341,
                    "end": 348,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 343,
                      "end": 348,
                      "literal": {
                        "type": "Literal",
                        "start": 343,
                        "end": 348,
                        "raw": "'baz'",
                        "value": "baz"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 275,
          "end": 297,
          "decorators": [],
          "name": "KeysWithoutStringIndex",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 449,
      "end": 513,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 456,
        "end": 513,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 461,
          "end": 473,
          "decorators": [],
          "name": "RemoveIdxSgn",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 479,
          "end": 513,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 483,
            "end": 513,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 484,
                "end": 485,
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 487,
                "end": 512,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 509,
                  "end": 512,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 510,
                      "end": 511,
                      "typeName": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 511,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 509,
                  "decorators": [],
                  "name": "KeysWithoutStringIndex",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 479,
            "end": 483,
            "decorators": [],
            "name": "Pick",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 473,
          "end": 476,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 474,
              "end": 475,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
