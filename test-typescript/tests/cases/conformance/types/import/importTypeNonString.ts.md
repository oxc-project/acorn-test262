__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 51,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 50,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 31,
                  "argument": {
                    "type": "TSTypeLiteral",
                    "start": 23,
                    "end": 30,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 24,
                        "end": 29,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 25,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 25,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 27,
                            "end": 29,
                            "literal": {
                              "type": "Literal",
                              "start": 27,
                              "end": 29,
                              "raw": "12",
                              "value": 12
                            }
                          }
                        }
                      }
                    ]
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "start": 34,
              "end": 50,
              "expression": {
                "type": "Identifier",
                "start": 34,
                "end": 43,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
