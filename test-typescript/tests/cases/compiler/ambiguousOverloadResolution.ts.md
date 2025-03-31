__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 42,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 46,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "name": "q",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 84,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 78,
          "end": 84
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 86,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 109,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 109,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 111,
          "end": 115,
          "name": "q",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 124,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 118,
          "end": 124
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
