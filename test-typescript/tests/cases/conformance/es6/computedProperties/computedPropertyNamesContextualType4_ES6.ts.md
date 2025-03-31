__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 59,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 35,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 40,
            "end": 57,
            "parameters": [
              {
                "type": "Identifier",
                "start": 41,
                "end": 50,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 53,
                "end": 56
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 72,
            "end": 113,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 92,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 79,
                  "end": 87,
                  "left": {
                    "type": "Literal",
                    "start": 79,
                    "end": 81,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 82,
                    "end": 87,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 90,
                  "end": 92,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 98,
                "end": 111,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 99,
                  "end": 107,
                  "left": {
                    "type": "Literal",
                    "start": 99,
                    "end": 101,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 102,
                    "end": 107,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
