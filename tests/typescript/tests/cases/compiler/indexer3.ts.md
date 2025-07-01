__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dateMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 19,
                            "end": 25
                          },
                          "start": 17,
                          "end": 25
                        },
                        "start": 16,
                        "end": 25
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 28,
                          "end": 32
                        },
                        "typeArguments": null,
                        "start": 28,
                        "end": 32
                      },
                      "start": 26,
                      "end": 32
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 15,
                    "end": 33
                  }
                ],
                "start": 13,
                "end": 35
              },
              "start": 11,
              "end": 35
            },
            "start": 4,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 38,
            "end": 40
          },
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 52
                },
                "typeArguments": null,
                "start": 48,
                "end": 52
              },
              "start": 46,
              "end": 52
            },
            "start": 45,
            "end": 52
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dateMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 62
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 63,
              "end": 70
            },
            "optional": false,
            "computed": true,
            "start": 55,
            "end": 71
          },
          "definite": false,
          "start": 45,
          "end": 71
        }
      ],
      "declare": false,
      "start": 41,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
