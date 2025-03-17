__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "_data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 28,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 27,
                "value": "data",
                "raw": "'data'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 79,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 48,
          "name": "User",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 79,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 55,
              "end": 77,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "name": "_data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 79,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
