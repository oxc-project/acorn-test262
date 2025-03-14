circularTypeArgumentsLocalAndOuterNoCrash1.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 194,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 193,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 193,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 82,
            "end": 138,
            "body": {
              "type": "TSInterfaceBody",
              "start": 136,
              "end": 138,
              "body": []
            },
            "declare": false,
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
                  "optional": false
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
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 100,
              "decorators": [],
              "name": "NumArray",
              "optional": false
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
                  "const": false,
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
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
            "type": "TSTypeAliasDeclaration",
            "start": 141,
            "end": 191,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 190,
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
                        "optional": false
                      }
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "start": 169,
                      "end": 171,
                      "members": []
                    },
                    "falseType": {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    },
                    "trueType": {
                      "type": "TSNumberKeyword",
                      "start": 174,
                      "end": 180
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 158,
                "decorators": [],
                "name": "NumArray",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 70,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 70,
              "decorators": [],
              "name": "_T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 74,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "_S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
