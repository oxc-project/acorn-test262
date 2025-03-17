__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 15,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 29,
                  "name": "ClassDecorator",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 70,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 67,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 68,
          "end": 70,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 32,
            "end": 42,
            "expression": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "name": "decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 15,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 29,
                  "name": "ClassDecorator",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 66,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 64,
          "end": 66,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 32,
            "end": 42,
            "expression": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "name": "decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
