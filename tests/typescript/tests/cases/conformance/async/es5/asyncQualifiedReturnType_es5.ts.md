__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 70,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 70,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 40,
                "decorators": [],
                "name": "MyPromise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 40,
                "end": 43,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 41,
                    "end": 42,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 59,
                "end": 62,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 63,
                "end": 70,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 92,
        "end": 111,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 94,
          "end": 111,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 94,
            "end": 105,
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 96,
              "end": 105,
              "decorators": [],
              "name": "MyPromise",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 105,
            "end": 111,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 106,
                "end": 110
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 115,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
