__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 19,
                "end": 28
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 18,
            "end": 39
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  },
                  "start": 46,
                  "end": 54
                },
                "start": 45,
                "end": 54
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 57,
                "end": 64
              },
              "start": 55,
              "end": 64
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 44,
            "end": 65
          }
        ],
        "start": 12,
        "end": 67
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "typeArguments": null,
                "start": 76,
                "end": 77
              },
              "start": 74,
              "end": 77
            },
            "start": 73,
            "end": 77
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 88,
                    "end": 93
                  },
                  "prefix": true,
                  "start": 87,
                  "end": 93
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 96,
                  "end": 98
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 98
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 106,
                    "end": 111
                  },
                  "prefix": true,
                  "start": 105,
                  "end": 111
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 114,
                  "end": 115
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 104,
                "end": 115
              }
            ],
            "start": 80,
            "end": 117
          },
          "definite": false,
          "start": 73,
          "end": 117
        }
      ],
      "declare": false,
      "start": 69,
      "end": 117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 117
}
```
