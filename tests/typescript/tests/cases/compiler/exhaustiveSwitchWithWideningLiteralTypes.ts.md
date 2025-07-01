__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 49
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 52,
              "end": 55
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 36,
            "end": 56
          }
        ],
        "start": 30,
        "end": 84
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 116,
              "end": 119
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 100,
            "end": 120
          }
        ],
        "start": 94,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 86,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "typeArguments": null,
                  "start": 168,
                  "end": 169
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 173
                  },
                  "typeArguments": null,
                  "start": 172,
                  "end": 173
                }
              ],
              "start": 168,
              "end": 173
            },
            "start": 166,
            "end": 173
          },
          "start": 161,
          "end": 173
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 176,
          "end": 182
        },
        "start": 174,
        "end": 182
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 201
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 206
              },
              "optional": false,
              "computed": false,
              "start": 196,
              "end": 206
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 223,
                  "end": 226
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 235,
                      "end": 236
                    },
                    "start": 228,
                    "end": 237
                  }
                ],
                "start": 218,
                "end": 237
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 251,
                  "end": 254
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 263,
                      "end": 264
                    },
                    "start": 256,
                    "end": 265
                  }
                ],
                "start": 246,
                "end": 265
              }
            ],
            "start": 189,
            "end": 271
          }
        ],
        "start": 183,
        "end": 273
      },
      "expression": false,
      "start": 150,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 273
}
```
