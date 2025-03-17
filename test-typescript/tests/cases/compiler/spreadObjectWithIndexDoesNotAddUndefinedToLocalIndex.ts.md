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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
          "definite": false,
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
                    "accessibility": null,
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
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 30,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 32,
                        "end": 38
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 102,
          "definite": false,
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
                    "accessibility": null,
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
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 66,
                        "end": 72
                      }
                    }
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
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 86,
                  "end": 95,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 86,
                    "end": 89,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 92,
                    "end": 95,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 100,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
