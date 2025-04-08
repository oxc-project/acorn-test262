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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  }
                },
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "name": "o",
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
            "start": 80,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 98,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 87,
                  "end": 93,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 88,
                    "end": 93,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 98,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 104,
                "end": 115,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 105,
                  "end": 111,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 106,
                    "end": 111,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 114,
                  "end": 115,
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
