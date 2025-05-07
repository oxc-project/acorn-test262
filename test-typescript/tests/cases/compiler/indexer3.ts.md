__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "decorators": [],
            "name": "dateMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 35,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 15,
                    "end": 33,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 16,
                        "end": 25,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17,
                          "end": 25,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 19,
                            "end": 25
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 26,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 28,
                        "end": 32,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 32,
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 40,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 52,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 52,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 52,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 55,
            "end": 71,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 55,
              "end": 62,
              "decorators": [],
              "name": "dateMap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 63,
              "end": 70,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
