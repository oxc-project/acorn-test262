foo_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 48,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 48,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 27,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 21,
                "decorators": [],
                "name": "m1",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 24,
                "end": 26,
                "raw": "42",
                "value": 42
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 46,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 38,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 41,
                "end": 45,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "decorators": [],
          "name": "C1",
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
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 81,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 81,
        "body": []
      },
      "test": {
        "type": "MemberExpression",
        "start": 36,
        "end": 45,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 36,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 42,
            "decorators": [],
            "name": "C1",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 45,
          "decorators": [],
          "name": "s1",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
