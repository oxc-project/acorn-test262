moduleInTypePosition1_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 41,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 41,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 27,
              "end": 39,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
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
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "Promise",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
moduleInTypePosition1_1.ts
```json
{
  "type": "Program",
  "start": 50,
  "end": 131,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 50,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "WinJS",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 65,
        "end": 101,
        "expression": {
          "type": "Literal",
          "start": 73,
          "end": 100,
          "raw": "'./moduleInTypePosition1_0'",
          "value": "./moduleInTypePosition1_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 129,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 126,
              "end": 129,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 121,
                "decorators": [],
                "name": "w1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 121,
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
