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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 56,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "value": "A",
              "raw": "\"A\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 148,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 116,
              "end": 119,
              "value": "B",
              "raw": "\"B\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 173,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 174,
        "end": 182,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 176,
          "end": 182
        }
      },
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
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 218,
                "end": 237,
                "test": {
                  "type": "Literal",
                  "start": 223,
                  "end": 226,
                  "value": "A",
                  "raw": "\"A\""
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 246,
                "end": 265,
                "test": {
                  "type": "Literal",
                  "start": 251,
                  "end": 254,
                  "value": "B",
                  "raw": "\"B\""
                },
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
                ]
              }
            ]
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
