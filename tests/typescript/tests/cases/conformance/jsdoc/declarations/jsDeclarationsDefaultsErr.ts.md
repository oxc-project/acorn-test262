__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 169,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 102,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 79,
              "raw": "12",
              "value": 12
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 100,
              "raw": "\"ok\"",
              "value": "ok"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 103,
      "end": 122,
      "declaration": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 150,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 77,
      "end": 102,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 92,
        "end": 102,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 100,
          "end": 102,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 102,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 66,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 76,
            "end": 78,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 102,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 100,
          "exported": {
            "type": "Identifier",
            "start": 93,
            "end": 100,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
