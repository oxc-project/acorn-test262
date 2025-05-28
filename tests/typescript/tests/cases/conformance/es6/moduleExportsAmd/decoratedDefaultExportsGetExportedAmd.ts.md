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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "decorator",
            "optional": false,
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
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 32,
            "end": 42,
            "expression": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 67,
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
          "start": 68,
          "end": 70,
          "body": []
        },
        "abstract": false,
        "declare": false
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
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "decorator",
            "optional": false,
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
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 32,
            "end": 42,
            "expression": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 64,
          "end": 66,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
