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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 34,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 47,
                      "end": 56
                    }
                  ],
                  "start": 38,
                  "end": 56
                },
                "start": 36,
                "end": 56
              },
              "accessibility": null,
              "static": false,
              "start": 34,
              "end": 56
            }
          ],
          "start": 32,
          "end": 58
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 69,
                "end": 70
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 73,
                  "end": 79
                },
                "start": 71,
                "end": 79
              },
              "accessibility": null,
              "static": false,
              "start": 69,
              "end": 79
            }
          ],
          "start": 67,
          "end": 81
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 84,
            "end": 88
          },
          "start": 84,
          "end": 88
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 91,
            "end": 96
          },
          "start": 91,
          "end": 96
        },
        "start": 32,
        "end": 96
      },
      "declare": false,
      "start": 22,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 120,
                    "end": 126
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 120,
                "end": 138
              },
              "start": 119,
              "end": 140
            }
          ],
          "start": 118,
          "end": 141
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 151,
                "end": 157
              },
              "start": 151,
              "end": 158
            }
          ],
          "start": 150,
          "end": 159
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 162,
            "end": 166
          },
          "start": 162,
          "end": 166
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 169,
            "end": 174
          },
          "start": 169,
          "end": 174
        },
        "start": 118,
        "end": 174
      },
      "declare": false,
      "start": 108,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 185
}
```
