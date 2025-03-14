classDoesNotDependOnPrivateMember.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 81,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 30,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 30,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 42,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 50,
                "end": 79,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 60,
                    "end": 73,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 71,
                        "end": 72,
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "C",
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
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
