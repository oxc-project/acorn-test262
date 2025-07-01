__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InputType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enable_member_receipts",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 51
          }
        ],
        "start": 17,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsEmptyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 73
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
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 73,
        "end": 76
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "typeArguments": null,
            "start": 93,
            "end": 94
          },
          "start": 87,
          "end": 94
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "start": 98,
          "end": 107
        },
        "optional": true,
        "readonly": null,
        "start": 79,
        "end": 109
      },
      "declare": false,
      "start": 55,
      "end": 110
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 129
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 140,
                      "end": 142
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsEmptyObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 159
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InputType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 160,
                              "end": 169
                            },
                            "typeArguments": null,
                            "start": 160,
                            "end": 169
                          }
                        ],
                        "start": 159,
                        "end": 170
                      },
                      "start": 146,
                      "end": 170
                    },
                    "start": 140,
                    "end": 170
                  },
                  "start": 136,
                  "end": 171
                }
              ],
              "start": 132,
              "end": 174
            },
            "definite": false,
            "start": 125,
            "end": 174
          }
        ],
        "declare": false,
        "start": 119,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
