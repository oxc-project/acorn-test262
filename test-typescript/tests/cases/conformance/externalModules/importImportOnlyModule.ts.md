__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 29,
          "raw": "'./foo_0'",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 75,
            "decorators": [],
            "name": "answer",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 78,
            "end": 80,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
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
          "raw": "\"./foo_1\"",
          "value": "./foo_1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
