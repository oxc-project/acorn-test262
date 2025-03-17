__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 186,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 29,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 32,
        "end": 96,
        "checkType": {
          "type": "TSTypeLiteral",
          "start": 32,
          "end": 58,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 34,
              "end": 56,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 34,
                "end": 35,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 38,
                  "end": 56,
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
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 67,
          "end": 81,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 69,
              "end": 79,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 73,
                  "end": 79
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 84,
          "end": 88,
          "literal": {
            "type": "Literal",
            "start": 84,
            "end": 88,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 91,
          "end": 96,
          "literal": {
            "type": "Literal",
            "start": 91,
            "end": 96,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 118,
        "end": 174,
        "checkType": {
          "type": "TSTupleType",
          "start": 118,
          "end": 141,
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "start": 119,
              "end": 140,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 120,
                "end": 138,
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
                ]
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 150,
          "end": 159,
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "start": 151,
              "end": 158,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 151,
                "end": 157
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 162,
          "end": 166,
          "literal": {
            "type": "Literal",
            "start": 162,
            "end": 166,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 169,
          "end": 174,
          "literal": {
            "type": "Literal",
            "start": 169,
            "end": 174,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
