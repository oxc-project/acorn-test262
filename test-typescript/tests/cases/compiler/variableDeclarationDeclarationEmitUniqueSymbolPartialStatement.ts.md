__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 32,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 42,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 52,
          "end": 74,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 58,
              "end": 72,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 62,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
