/project/node_modules/cjs-dep/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 43,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 26,
        "decorators": [],
        "name": "SpecialError",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "Error",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 44,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 53,
        "end": 65,
        "decorators": [],
        "name": "SpecialError",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/project/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 24,
        "decorators": [],
        "name": "SpecialError",
        "optional": false
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 27,
        "end": 45,
        "expression": {
          "type": "Literal",
          "start": 35,
          "end": 44,
          "raw": "\"cjs-dep\"",
          "value": "cjs-dep"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 89,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 89,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 67,
        "decorators": [],
        "name": "handleError",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 85,
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 85,
                "decorators": [],
                "name": "SpecialError",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
