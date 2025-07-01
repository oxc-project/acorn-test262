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
        "name": "Symbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "newSymbolProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 45
          }
        ],
        "start": 17,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "start": 53,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 64
        }
      ],
      "declare": false,
      "start": 49,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 69
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "newSymbolProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 83
        },
        "optional": false,
        "computed": false,
        "start": 66,
        "end": 83
      },
      "directive": null,
      "start": 66,
      "end": 84
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
