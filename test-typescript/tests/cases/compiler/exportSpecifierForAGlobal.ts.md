a.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 19,
        "end": 63,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 32,
          "end": 63,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 38,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 46,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 46,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 45,
                        "end": 46,
                        "typeName": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "X",
                          "optional": false
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
              "type": "ReturnStatement",
              "start": 52,
              "end": 61,
              "argument": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
