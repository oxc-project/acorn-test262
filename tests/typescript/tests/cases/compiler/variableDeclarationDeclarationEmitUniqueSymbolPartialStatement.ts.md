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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 52,
          "end": 74,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 58,
              "end": 72,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 62,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
