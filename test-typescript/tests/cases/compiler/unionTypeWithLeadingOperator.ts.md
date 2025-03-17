__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 17,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 19,
      "end": 80,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 30,
        "end": 79,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 32,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 34,
                "end": 51,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 40,
                    "end": 51,
                    "literal": {
                      "type": "Literal",
                      "start": 40,
                      "end": 51,
                      "raw": "\"INCREMENT\"",
                      "value": "INCREMENT"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 58,
            "end": 79,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 60,
                "end": 77,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 66,
                    "end": 77,
                    "literal": {
                      "type": "Literal",
                      "start": 66,
                      "end": 77,
                      "raw": "\"DECREMENT\"",
                      "value": "DECREMENT"
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 91,
        "end": 117,
        "elementTypes": [
          {
            "type": "TSUnionType",
            "start": 92,
            "end": 99,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 94,
                "end": 95,
                "literal": {
                  "type": "Literal",
                  "start": 94,
                  "end": 95,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "TSLiteralType",
                "start": 98,
                "end": 99,
                "literal": {
                  "type": "Literal",
                  "start": 98,
                  "end": 99,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 101,
            "end": 116,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 103,
                "end": 108,
                "literal": {
                  "type": "Literal",
                  "start": 103,
                  "end": 108,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 111,
                "end": 116,
                "literal": {
                  "type": "Literal",
                  "start": 111,
                  "end": 116,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 219,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 127,
        "end": 219,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 154,
          "end": 204,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 169,
              "end": 170,
              "literal": {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "TSLiteralType",
              "start": 203,
              "end": 204,
              "literal": {
                "type": "Literal",
                "start": 203,
                "end": 204,
                "raw": "2",
                "value": 2
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
