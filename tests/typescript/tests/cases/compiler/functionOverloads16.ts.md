__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 37,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 28,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 28,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 18,
                  "end": 27,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 19,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 36,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 30,
          "end": 36
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 75,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 66,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 66,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 66,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 56,
                  "end": 65,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 67,
        "end": 74,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 68,
          "end": 74
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 134,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 134,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 123,
            "end": 132,
            "argument": {
              "type": "Literal",
              "start": 130,
              "end": 132,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 115,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 93,
              "end": 115,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 94,
                  "end": 103,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 96,
                      "end": 102
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 104,
                  "end": 114,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 107,
                      "end": 113
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 120,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 117,
          "end": 120
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
