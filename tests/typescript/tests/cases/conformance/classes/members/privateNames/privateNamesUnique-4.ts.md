__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 12,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 13,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 25,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 34,
          "end": 36,
          "expression": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 61,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "A2",
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 93,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 91,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 83,
              "name": "something"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              }
            },
            "value": null,
            "computed": false,
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
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 109,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 104,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
