__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 42,
                "end": 43
              },
              "start": 42,
              "end": 43
            }
          ],
          "start": 41,
          "end": 44
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 60,
                "end": 61
              },
              "start": 54,
              "end": 61
            },
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              },
              "start": 63,
              "end": 67
            }
          ],
          "start": 53,
          "end": 68
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "typeArguments": null,
              "start": 76,
              "end": 77
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 80,
                      "end": 81
                    },
                    "start": 80,
                    "end": 81
                  }
                ],
                "start": 79,
                "end": 82
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 93
                  }
                ],
                "start": 91,
                "end": 94
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 97,
                  "end": 101
                },
                "start": 97,
                "end": 101
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 104,
                  "end": 109
                },
                "start": 104,
                "end": 109
              },
              "start": 79,
              "end": 109
            }
          ],
          "start": 75,
          "end": 110
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 117,
          "end": 122
        },
        "start": 41,
        "end": 122
      },
      "declare": false,
      "start": 30,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34,
    "range": [
      30,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Hmm",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 45,
    "end": 52,
    "range": [
      45,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66,
    "range": [
      63,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90,
    "range": [
      83,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 117,
    "end": 122,
    "range": [
      117,
      122
    ]
  }
]
```
