aliasWithInterfaceExportAssignmentUsedInVarInitializer_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "q3",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 32,
      "end": 43,
      "expression": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
aliasWithInterfaceExportAssignmentUsedInVarInitializer_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "moduleA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 86,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 85,
          "raw": "\"./aliasWithInterfaceExportAssignmentUsedInVarInitializer_0\"",
          "value": "./aliasWithInterfaceExportAssignmentUsedInVarInitializer_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 100,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "q3",
              "optional": false
            }
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
