__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 392,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 104,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 76,
              "end": 94,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 82,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 109,
            "end": 131,
            "parameters": [
              {
                "type": "Identifier",
                "start": 110,
                "end": 121,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 115,
                    "end": 121
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
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
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 147,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 213,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 183,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 155,
              "end": 173,
              "object": {
                "type": "Identifier",
                "start": 155,
                "end": 161,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 162,
                "end": 173,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 188,
            "end": 211,
            "parameters": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 200,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 192,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 194,
                    "end": 200
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 210,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 203,
                "end": 210
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
      "start": 215,
      "end": 253,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 252,
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 239,
                "end": 252,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 246,
                  "end": 252
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 255,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 267,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 268,
        "end": 322,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 293,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 283,
              "decorators": [],
              "name": "mySymbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 292,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 286,
                "end": 292
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 298,
            "end": 320,
            "parameters": [
              {
                "type": "Identifier",
                "start": 299,
                "end": 310,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 302,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 304,
                    "end": 310
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
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
      "type": "TSInterfaceDeclaration",
      "start": 324,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 336,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 392,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 362,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 352,
              "decorators": [],
              "name": "mySymbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 361,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 355,
                "end": 361
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 367,
            "end": 390,
            "parameters": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 379,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 379,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 389,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 382,
                "end": 389
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
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
