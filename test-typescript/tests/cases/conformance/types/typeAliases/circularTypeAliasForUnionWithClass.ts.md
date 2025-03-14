__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 10,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8,
                "end": 10,
                "typeName": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 10,
                  "decorators": [],
                  "name": "T0",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 12,
      "end": 34,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "T0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 22,
        "end": 33,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSTypeReference",
            "start": 31,
            "end": 33,
            "typeName": {
              "type": "Identifier",
              "start": 31,
              "end": 33,
              "decorators": [],
              "name": "I0",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 56,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 55,
                  "decorators": [],
                  "name": "T0",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "I0",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 70,
                  "decorators": [],
                  "name": "T3",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 94,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 79,
        "decorators": [],
        "name": "T3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 82,
        "end": 93,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 82,
            "end": 88
          },
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 93,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 93,
              "decorators": [],
              "name": "I3",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 128,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 110,
            "end": 126,
            "parameters": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 120,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 114,
                    "end": 120
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "decorators": [],
                  "name": "T3",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 103,
        "decorators": [],
        "name": "I3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 140,
                  "decorators": [],
                  "name": "T4",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 164,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "T4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 152,
        "end": 163,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 152,
            "end": 158
          },
          {
            "type": "TSTypeReference",
            "start": 161,
            "end": 163,
            "typeName": {
              "type": "Identifier",
              "start": 161,
              "end": 163,
              "decorators": [],
              "name": "I4",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 198,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 180,
            "end": 196,
            "parameters": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 190,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 184,
                    "end": 190
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
                  "decorators": [],
                  "name": "T4",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "decorators": [],
        "name": "I4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
