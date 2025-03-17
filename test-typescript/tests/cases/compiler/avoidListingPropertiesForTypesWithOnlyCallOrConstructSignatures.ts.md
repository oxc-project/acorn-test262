__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "name": "barkable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 30,
                "end": 34,
                "literal": {
                  "type": "Literal",
                  "start": 30,
                  "end": 34,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 63,
        "name": "getRover",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 70,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 67,
          "end": 70,
          "typeName": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "name": "Dog",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 104,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 83,
        "end": 104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 92,
                    "name": "Dog",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "name": "getRover",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
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
