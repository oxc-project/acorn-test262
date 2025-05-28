__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 70,
              "decorators": [],
              "name": "_T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 193,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 82,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 100,
              "decorators": [],
              "name": "NumArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 100,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 101,
                  "end": 117,
                  "name": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 127,
                "end": 135,
                "expression": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 132,
                  "end": 135,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 134,
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 136,
              "end": 138,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 141,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 158,
                "decorators": [],
                "name": "NumArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 158,
                "end": 190,
                "params": [
                  {
                    "type": "TSConditionalType",
                    "start": 159,
                    "end": 189,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "start": 169,
                      "end": 171,
                      "members": []
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
                    }
                  }
                ]
              }
            },
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
