__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 117,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
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
          "start": 32,
          "end": 60,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 60,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 35,
              "end": 60,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 35,
                  "end": 46,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 36,
                      "end": 43,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 37,
                        "end": 42,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 39,
                          "end": 42,
                          "literal": {
                            "type": "Literal",
                            "start": 39,
                            "end": 42,
                            "value": "A",
                            "raw": "\"A\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 44,
                      "end": 45,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": null,
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 49,
                  "end": 60,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 50,
                      "end": 57,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 51,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 53,
                          "end": 56,
                          "literal": {
                            "type": "Literal",
                            "start": 53,
                            "end": 56,
                            "value": "C",
                            "raw": "\"C\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 58,
                      "end": 59,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": null,
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "start": 62,
        "end": 117,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 68,
            "end": 115,
            "discriminant": {
              "type": "MemberExpression",
              "start": 76,
              "end": 79,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "a",
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
                "start": 87,
                "end": 109,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 103,
                    "end": 109,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
