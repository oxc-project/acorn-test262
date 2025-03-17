__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 54,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "InputType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 17,
        "end": 53,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 41,
              "decorators": [],
              "name": "enable_member_receipts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 110,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 73,
        "decorators": [],
        "name": "AsEmptyObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 79,
        "end": 109,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 87,
          "end": 94,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 94,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": true,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "start": 98,
          "end": 107
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 112,
      "end": 175,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 119,
        "end": 175,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 125,
            "end": 174,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 132,
              "end": 174,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 136,
                  "end": 171,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 140,
                    "end": 170,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 140,
                      "end": 142,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 170,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 159,
                        "end": 170,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 160,
                            "end": 169,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 169,
                              "decorators": [],
                              "name": "InputType",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 159,
                        "decorators": [],
                        "name": "AsEmptyObject",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
