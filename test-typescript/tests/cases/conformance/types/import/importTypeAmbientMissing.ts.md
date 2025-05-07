__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 110,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 88,
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 63,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
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
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 72,
                  "end": 82,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 75,
                      "end": 81
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSExportAssignment",
            "start": 93,
            "end": 108,
            "expression": {
              "type": "Identifier",
              "start": 102,
              "end": 107,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 132,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 132,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 120,
                "end": 132,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 127,
                  "end": 131,
                  "literal": {
                    "type": "Literal",
                    "start": 127,
                    "end": 131,
                    "raw": "\"fo\"",
                    "value": "fo",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 135,
            "end": 149,
            "properties": [
              {
                "type": "Property",
                "start": 137,
                "end": 141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 141,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 143,
                "end": 147,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 147,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
