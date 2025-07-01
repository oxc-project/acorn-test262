__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 37
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 39,
                            "end": 42
                          },
                          "start": 39,
                          "end": 42
                        },
                        "start": 37,
                        "end": 42
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 36,
                      "end": 43
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 45
                      },
                      "typeAnnotation": null,
                      "accessibility": null,
                      "static": false,
                      "start": 44,
                      "end": 45
                    }
                  ],
                  "start": 35,
                  "end": 46
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "C",
                            "raw": "\"C\"",
                            "start": 53,
                            "end": 56
                          },
                          "start": 53,
                          "end": 56
                        },
                        "start": 51,
                        "end": 56
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 50,
                      "end": 57
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 59
                      },
                      "typeAnnotation": null,
                      "accessibility": null,
                      "static": false,
                      "start": 58,
                      "end": 59
                    }
                  ],
                  "start": 49,
                  "end": 60
                }
              ],
              "start": 35,
              "end": 60
            },
            "start": 33,
            "end": 60
          },
          "start": 32,
          "end": 60
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 79
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 103,
                    "end": 109
                  }
                ],
                "start": 87,
                "end": 109
              }
            ],
            "start": 68,
            "end": 115
          }
        ],
        "start": 62,
        "end": 117
      },
      "expression": false,
      "start": 21,
      "end": 117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 117
}
```
