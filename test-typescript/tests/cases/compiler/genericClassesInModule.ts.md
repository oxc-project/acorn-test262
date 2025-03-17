__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 38,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 38,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 32,
                "end": 35,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 33,
                    "end": 34,
                    "name": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 62,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 51,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 59,
                "end": 62,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 74,
            "end": 92,
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 83,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 83,
              "end": 90,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 84,
                  "end": 89,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 84,
                    "end": 89,
                    "left": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
