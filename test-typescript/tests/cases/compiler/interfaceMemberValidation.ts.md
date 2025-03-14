interfaceMemberValidation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "i1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 31,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 84,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 70,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 82,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 73,
              "decorators": [],
              "name": "yo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 52,
          "end": 54,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "decorators": [],
            "name": "i1",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "i2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 100,
        "end": 193,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 103,
            "end": 113,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 112,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 109,
                "end": 112
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 115,
            "end": 125,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 124,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 121,
                "end": 124
              }
            },
            "static": false
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 127,
            "end": 138,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 133,
                "end": 137
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 140,
            "end": 151,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 150,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 146,
                "end": 150
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 153,
            "end": 171,
            "parameters": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 162,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 173,
            "end": 191,
            "parameters": [
              {
                "type": "Identifier",
                "start": 174,
                "end": 182,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 176,
                    "end": 182
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 190,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
