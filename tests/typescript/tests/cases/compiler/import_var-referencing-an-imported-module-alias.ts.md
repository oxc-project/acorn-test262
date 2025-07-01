__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Host",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 18,
          "end": 21
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "host",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "host",
          "raw": "\"host\"",
          "start": 22,
          "end": 28
        },
        "start": 14,
        "end": 29
      },
      "importKind": "value",
      "start": 0,
      "end": 30
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
            "name": "hostVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 42
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "host",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "definite": false,
          "start": 35,
          "end": 49
        }
      ],
      "declare": false,
      "start": 31,
      "end": 50
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hostVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 70
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Host",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 75
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [],
            "start": 59,
            "end": 77
          },
          "definite": false,
          "start": 55,
          "end": 77
        }
      ],
      "declare": false,
      "start": 51,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
