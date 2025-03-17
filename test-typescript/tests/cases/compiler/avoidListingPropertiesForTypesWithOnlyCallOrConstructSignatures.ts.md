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
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "decorators": [],
              "name": "barkable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 70,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 63,
        "decorators": [],
        "name": "getRover",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 70,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 67,
          "end": 70,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 104,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 83,
        "end": 104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 103,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 92,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 92,
                    "decorators": [],
                    "name": "Dog",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "decorators": [],
              "name": "getRover",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
