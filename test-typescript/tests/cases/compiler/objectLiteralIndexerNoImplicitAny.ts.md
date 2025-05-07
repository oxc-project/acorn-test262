__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 37,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 35,
            "accessibility": null,
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
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
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 50,
            "end": 65,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 63,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 63,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
