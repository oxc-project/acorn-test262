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
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "barkable",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 30,
                  "end": 34
                },
                "start": 30,
                "end": 34
              },
              "start": 28,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 34
          }
        ],
        "start": 14,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRover",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "typeArguments": null,
          "start": 67,
          "end": 70
        },
        "start": 65,
        "end": 70
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 92
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 92
                },
                "start": 88,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "getRover",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 103
            },
            "definite": false,
            "start": 87,
            "end": 103
          }
        ],
        "declare": false,
        "start": 83,
        "end": 104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
