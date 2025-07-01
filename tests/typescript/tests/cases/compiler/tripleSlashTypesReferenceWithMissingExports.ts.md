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
        "name": "GlobalThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 33
          }
        ],
        "start": 22,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GlobalThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 51
                },
                "typeArguments": null,
                "start": 40,
                "end": 51
              },
              "start": 38,
              "end": 51
            },
            "start": 37,
            "end": 51
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 59,
                  "end": 60
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 56,
                "end": 60
              }
            ],
            "start": 54,
            "end": 62
          },
          "definite": false,
          "start": 37,
          "end": 62
        }
      ],
      "declare": false,
      "start": 31,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 63
}
```
