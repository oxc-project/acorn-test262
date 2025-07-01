__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "_T",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 70
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 74
          }
        ],
        "start": 67,
        "end": 75
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 100
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 101,
                  "end": 117
                }
              ],
              "start": 100,
              "end": 118
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 134
                      },
                      "typeArguments": null,
                      "start": 133,
                      "end": 134
                    }
                  ],
                  "start": 132,
                  "end": 135
                },
                "start": 127,
                "end": 135
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 136,
              "end": 138
            },
            "declare": false,
            "start": 82,
            "end": 138
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 158
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 160
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 169,
                      "end": 171
                    },
                    "trueType": {
                      "type": "TSNumberKeyword",
                      "start": 174,
                      "end": 180
                    },
                    "falseType": {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    },
                    "start": 159,
                    "end": 189
                  }
                ],
                "start": 158,
                "end": 190
              },
              "start": 150,
              "end": 190
            },
            "declare": false,
            "start": 141,
            "end": 191
          }
        ],
        "start": 78,
        "end": 193
      },
      "expression": false,
      "start": 57,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 193
}
```
