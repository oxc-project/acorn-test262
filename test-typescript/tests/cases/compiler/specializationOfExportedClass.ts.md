specializationOfExportedClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 33,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 26,
                "end": 29,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 27,
                    "end": 28,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 47,
            "end": 64,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 51,
              "end": 54,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 54,
              "end": 62,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 55,
                  "end": 61
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
