__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "InputType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 17,
        "end": 53,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 51,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 41,
              "decorators": [],
              "name": "enable_member_receipts",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 73,
        "decorators": [],
        "name": "AsEmptyObject",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 79,
        "end": 109,
        "key": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 87,
          "end": 94,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 94,
            "typeName": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "start": 98,
          "end": 107
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 112,
      "end": 175,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 119,
        "end": 175,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 125,
            "end": 174,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 159,
                        "decorators": [],
                        "name": "AsEmptyObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 159,
                        "end": 170,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 160,
                            "end": 169,
                            "typeName": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 169,
                              "decorators": [],
                              "name": "InputType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
