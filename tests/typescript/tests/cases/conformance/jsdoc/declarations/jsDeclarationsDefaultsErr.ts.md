__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 77,
              "end": 79
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 73,
            "end": 80
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "ok",
              "raw": "\"ok\"",
              "start": 96,
              "end": 100
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 85,
            "end": 100
          }
        ],
        "start": 67,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "exportKind": "value",
      "start": 103,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 169
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 100,
          "end": 102
        },
        "abstract": false,
        "declare": false,
        "start": 92,
        "end": 102
      },
      "exportKind": "value",
      "start": 77,
      "end": 102
    },
    {
      "type": "EmptyStatement",
      "start": 102,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 77,
  "end": 150
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 76,
            "end": 78
          },
          "definite": false,
          "start": 72,
          "end": 78
        }
      ],
      "declare": false,
      "start": 66,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 100
          },
          "exportKind": "value",
          "start": 88,
          "end": 100
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 66,
  "end": 148
}
```
