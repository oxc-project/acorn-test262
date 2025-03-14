declFileTypeofClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 111,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 62,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 86,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 77,
              "decorators": [],
              "name": "x3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 109,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "y3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
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
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "c",
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
      "type": "VariableDeclaration",
      "start": 123,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 149,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 141,
                "end": 149,
                "exprName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "c",
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
      "type": "ClassDeclaration",
      "start": 151,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 172,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 165,
        "decorators": [],
        "name": "genericC",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 168,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 167,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
      "type": "VariableDeclaration",
      "start": 173,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 185,
            "decorators": [],
            "name": "genericX",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 188,
            "end": 196,
            "decorators": [],
            "name": "genericC",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
