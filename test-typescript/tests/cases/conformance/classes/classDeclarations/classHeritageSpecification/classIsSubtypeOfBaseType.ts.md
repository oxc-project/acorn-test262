__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "T",
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "type": "ClassDeclaration",
      "start": 31,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 134,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 87,
                "end": 134,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 109,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 100,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 110,
                    "end": 122,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 115,
                        "end": 121
                      }
                    }
                  }
                ]
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
        "start": 37,
        "end": 44,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 57,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 57,
        "end": 75,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 58,
            "end": 74,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 60,
                "end": 72,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 65,
                    "end": 71
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 184,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 233,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 195,
                "end": 233,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 205,
                    "end": 218,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 208,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 211,
                        "end": 217
                      }
                    }
                  }
                ]
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
        "start": 144,
        "end": 152,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 161,
        "end": 165,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 165,
        "end": 183,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 166,
            "end": 182,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 168,
                "end": 180,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
                  }
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
