__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 273,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 56,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "value": "A",
              "raw": "\"A\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 86,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 116,
              "end": 119,
              "value": "B",
              "raw": "\"B\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
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
          "start": 161,
          "end": 173,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 173,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 168,
              "end": 173,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 168,
                  "end": 169,
                  "typeName": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 172,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 273,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 189,
            "end": 271,
            "discriminant": {
              "type": "MemberExpression",
              "start": 196,
              "end": 206,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 201,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 218,
                "end": 237,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 237,
                    "argument": {
                      "type": "Literal",
                      "start": 235,
                      "end": 236,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 223,
                  "end": 226,
                  "value": "A",
                  "raw": "\"A\""
                }
              },
              {
                "type": "SwitchCase",
                "start": 246,
                "end": 265,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 256,
                    "end": 265,
                    "argument": {
                      "type": "Literal",
                      "start": 263,
                      "end": 264,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 251,
                  "end": 254,
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 174,
        "end": 182,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 176,
          "end": 182
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
