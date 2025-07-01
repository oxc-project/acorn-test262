__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          }
        ],
        "start": 9,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 37
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 37,
                  "end": 45
                },
                "accessibility": null,
                "static": false,
                "start": 34,
                "end": 45
              }
            ],
            "start": 32,
            "end": 47
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 57
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 59,
                    "end": 65
                  },
                  "start": 57,
                  "end": 65
                },
                "accessibility": null,
                "static": false,
                "start": 54,
                "end": 65
              }
            ],
            "start": 52,
            "end": 67
          }
        ],
        "start": 30,
        "end": 67
      },
      "declare": false,
      "start": 19,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSIntersectionType",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 87
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 89,
                          "end": 90
                        },
                        "start": 89,
                        "end": 90
                      },
                      "start": 87,
                      "end": 90
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 90
                  }
                ],
                "start": 82,
                "end": 92
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 100
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 102,
                          "end": 103
                        },
                        "start": 102,
                        "end": 103
                      },
                      "start": 100,
                      "end": 103
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 103
                  }
                ],
                "start": 95,
                "end": 105
              }
            ],
            "start": 80,
            "end": 105
          },
          {
            "type": "TSIntersectionType",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 116,
                          "end": 117
                        },
                        "start": 116,
                        "end": 117
                      },
                      "start": 114,
                      "end": 117
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 117
                  }
                ],
                "start": 109,
                "end": 119
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 127
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 129,
                          "end": 130
                        },
                        "start": 129,
                        "end": 130
                      },
                      "start": 127,
                      "end": 130
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 124,
                    "end": 130
                  }
                ],
                "start": 122,
                "end": 132
              }
            ],
            "start": 107,
            "end": 132
          }
        ],
        "start": 79,
        "end": 133
      },
      "declare": false,
      "start": 70,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
