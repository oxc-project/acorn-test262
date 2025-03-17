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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 29,
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 70,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 70,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 68,
          "end": 70,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 29,
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 66,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 64,
          "end": 66,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
