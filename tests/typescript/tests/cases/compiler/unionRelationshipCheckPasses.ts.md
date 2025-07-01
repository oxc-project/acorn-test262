__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
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
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14,
                          "end": 17
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 20,
                            "end": 29
                          },
                          "start": 18,
                          "end": 29
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 14,
                        "end": 29
                      }
                    ],
                    "start": 12,
                    "end": 31
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 39
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 41,
                            "end": 47
                          },
                          "start": 39,
                          "end": 47
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 36,
                        "end": 47
                      }
                    ],
                    "start": 34,
                    "end": 49
                  }
                ],
                "start": 12,
                "end": 49
              },
              "start": 10,
              "end": 49
            },
            "start": 6,
            "end": 49
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 52,
                "end": 56
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              },
              "start": 52,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 72
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 75,
                          "end": 81
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 84,
                          "end": 93
                        }
                      ],
                      "start": 75,
                      "end": 93
                    },
                    "start": 73,
                    "end": 93
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 69,
                  "end": 93
                }
              ],
              "start": 67,
              "end": 95
            },
            "start": 52,
            "end": 95
          },
          "definite": false,
          "start": 6,
          "end": 95
        }
      ],
      "declare": false,
      "start": 0,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
