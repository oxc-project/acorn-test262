inferTypesWithExtends2.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "X1",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
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
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 133,
              "end": 158,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 171,
          "end": 176
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 164,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
      "start": 242,
      "end": 327,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 249,
        "decorators": [],
        "name": "X2",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
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
              "key": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 283,
              "end": 303,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 302,
                      "end": 303,
                      "typeName": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 303,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 312,
              "end": 313,
              "typeName": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          ]
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
