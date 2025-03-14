__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 16,
            "end": 34,
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 27,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 29,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 107,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 107,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 64,
            "end": 83,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 69,
                    "end": 74,
                    "literal": {
                      "type": "Literal",
                      "start": 69,
                      "end": 74,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 86,
            "end": 105,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 96,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 91,
                    "end": 96,
                    "literal": {
                      "type": "Literal",
                      "start": 91,
                      "end": 96,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 59,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
