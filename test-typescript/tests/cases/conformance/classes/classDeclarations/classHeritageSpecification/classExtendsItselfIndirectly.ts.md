__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 32,
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
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 79,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 79,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 77,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
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
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 115,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 115,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 113,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
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
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 152,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
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
              "start": 148,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
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
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 137,
        "end": 139,
        "decorators": [],
        "name": "E2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 139,
        "end": 142,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 140,
            "end": 141,
            "typeName": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 125,
        "end": 128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 126,
            "end": 127,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
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
      "start": 165,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 191,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 200,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 196,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
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
        "start": 171,
        "end": 173,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 187,
        "end": 190,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 188,
            "end": 189,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 176,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 175,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
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
      "start": 204,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 241,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 239,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 235,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 237,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
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
        "start": 210,
        "end": 212,
        "decorators": [],
        "name": "E2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 226,
        "end": 229,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 227,
            "end": 228,
            "typeName": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 212,
        "end": 215,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 213,
            "end": 214,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
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
  "sourceType": "script",
  "hashbang": null
}
```
