__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 45,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 45,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 38,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 39,
                    "end": 40,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 113,
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 65,
            "end": 111,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 72,
              "end": 111,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 108,
                "end": 111,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 96,
                  "end": 107,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 96,
                    "end": 104,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 99,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 104,
                    "end": 107,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 106,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 81,
                "end": 84,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 82,
                    "end": 83,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
