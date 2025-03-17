__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 327,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "name": "X1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 94,
        "end": 176,
        "checkType": {
          "type": "TSTypeReference",
          "start": 94,
          "end": 95,
          "typeName": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 104,
          "end": 160,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 106,
              "end": 132,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 107,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 109,
                  "end": 131,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 115,
                    "end": 131,
                    "name": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 133,
              "end": 158,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 158,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 136,
                  "end": 158,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 142,
                    "end": 158,
                    "name": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 164,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 171,
          "end": 176
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 242,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 249,
        "name": "X2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 259,
        "end": 326,
        "checkType": {
          "type": "TSTypeReference",
          "start": 259,
          "end": 260,
          "typeName": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 269,
          "end": 305,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 271,
              "end": 282,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 272,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 274,
                  "end": 281,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 280,
                    "end": 281,
                    "name": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
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
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 283,
              "end": 303,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 284,
                "end": 303,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 286,
                  "end": 303,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 292,
                    "end": 303,
                    "name": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 302,
                      "end": 303,
                      "typeName": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 303,
                        "name": "U",
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
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 308,
          "end": 314,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 309,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 312,
              "end": 313,
              "typeName": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
