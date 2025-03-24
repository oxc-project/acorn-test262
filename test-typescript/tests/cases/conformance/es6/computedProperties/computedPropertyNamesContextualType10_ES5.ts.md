__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
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
        "end": 41,
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
                    "type": "TSNumberKeyword",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 51,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
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
            "start": 54,
            "end": 91,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 72,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 61,
                  "end": 67,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 62,
                    "end": 67,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 70,
                  "end": 72,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 78,
                "end": 89,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 79,
                  "end": 85,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 80,
                    "end": 85,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 89,
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
