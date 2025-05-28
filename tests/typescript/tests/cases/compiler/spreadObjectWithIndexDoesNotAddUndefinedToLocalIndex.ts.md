__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 40,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 40,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 19,
                    "end": 38,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 20,
                        "end": 29,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 23,
                            "end": 29
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 30,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 32,
                        "end": 38
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 103,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 51,
                "end": 74,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 53,
                    "end": 72,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 66,
                        "end": 72
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 102,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 79,
                "end": 83,
                "argument": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 85,
                "end": 100,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 86,
                  "end": 95,
                  "left": {
                    "type": "Literal",
                    "start": 86,
                    "end": 89,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 92,
                    "end": 95,
                    "value": "b",
                    "raw": "\"b\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 100,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
