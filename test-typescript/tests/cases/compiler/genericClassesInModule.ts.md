genericClassesInModule.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 38,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 38,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 38,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 32,
                "end": 35,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 33,
                    "end": 34,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 62,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 51,
              "end": 62,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 59,
                "end": 62,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 74,
            "end": 92,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
