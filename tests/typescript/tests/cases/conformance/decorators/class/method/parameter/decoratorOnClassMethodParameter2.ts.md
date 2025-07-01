__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 35
              },
              "typeArguments": null,
              "start": 29,
              "end": 35
            },
            "start": 27,
            "end": 35
          },
          "start": 21,
          "end": 35
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 50,
                  "end": 56
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 59,
                  "end": 65
                }
              ],
              "start": 50,
              "end": 65
            },
            "start": 48,
            "end": 65
          },
          "start": 37,
          "end": 65
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameterIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            },
            "start": 81,
            "end": 89
          },
          "start": 67,
          "end": 89
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        },
        "start": 90,
        "end": 96
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 119
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 127
                      },
                      "typeArguments": null,
                      "start": 126,
                      "end": 127
                    },
                    "start": 124,
                    "end": 127
                  },
                  "start": 120,
                  "end": 127
                },
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 133
                      },
                      "start": 129,
                      "end": 133
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 137,
                      "end": 143
                    },
                    "start": 135,
                    "end": 143
                  },
                  "start": 134,
                  "end": 143
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 145,
                "end": 147
              },
              "expression": false,
              "start": 119,
              "end": 147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 113,
            "end": 147
          }
        ],
        "start": 107,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
