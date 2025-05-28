__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 67,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 39,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 38,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 65,
            "parameters": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 54,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 64,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 57,
                "end": 64
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
      "start": 69,
      "end": 117,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 80,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 98,
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "start": 87,
                  "end": 93,
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "start": 88,
                    "end": 93,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "prefix": true
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 98,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 104,
                "end": 115,
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "start": 105,
                  "end": 111,
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "start": 106,
                    "end": 111,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "prefix": true
                },
                "value": {
                  "type": "Literal",
                  "start": 114,
                  "end": 115,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
