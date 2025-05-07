__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 31,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 57,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 69,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 82,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 85,
            "end": 89,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 167,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 169,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 183,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 186,
            "end": 191,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 186,
              "end": 188,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 189,
              "end": 190,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
