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
          "start": 32,
          "end": 60,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 87,
                "end": 109,
                "test": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 103,
                    "end": 109,
                    "label": null
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
