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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 19,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "INCREMENT",
                      "raw": "\"INCREMENT\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "DECREMENT",
                      "raw": "\"DECREMENT\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                  "value": 0,
                  "raw": "0"
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
                  "value": 1,
                  "raw": "1"
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
                  "value": "foo",
                  "raw": "\"foo\""
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
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 219,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 127,
        "end": 219,
        "id": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
                "value": 1,
                "raw": "1"
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
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
