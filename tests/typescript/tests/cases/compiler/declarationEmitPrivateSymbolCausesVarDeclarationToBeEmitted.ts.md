__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "_data",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 27,
                "raw": "'data'",
                "value": "data"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 79,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 79,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 55,
              "end": 77,
              "accessibility": "private",
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "decorators": [],
                "name": "_data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 73,
                  "end": 76
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 48,
          "decorators": [],
          "name": "User",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 79,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
