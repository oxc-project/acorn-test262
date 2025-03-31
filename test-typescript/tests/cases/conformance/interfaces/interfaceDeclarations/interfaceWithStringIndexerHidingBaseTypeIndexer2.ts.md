__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 105,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 58,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 34,
                "end": 58,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 46,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 47,
                    "end": 56,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 103,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 66,
                "end": 103,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 76,
                    "end": 86,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 85,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 79,
                        "end": 85
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 87,
                    "end": 97,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 88,
                      "end": 96,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 90,
                        "end": 96
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 124,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 133,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 133,
            "end": 137,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 267,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 144,
            "end": 183,
            "parameters": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 154,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 146,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 148,
                    "end": 154
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 157,
                "end": 182,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 167,
                    "end": 176,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 218,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 192,
                "end": 218,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 202,
                    "end": 212,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 205,
                        "end": 211
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 265,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 236,
              "end": 237,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 239,
                "end": 265,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 249,
                    "end": 259,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 252,
                        "end": 258
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
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
