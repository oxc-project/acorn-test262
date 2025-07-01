__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "initializer": null,
            "computed": false,
            "start": 10,
            "end": 11
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "initializer": null,
            "computed": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 7,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "start": 24,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumE",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exportAssignmentEnum_A",
          "raw": "\"./exportAssignmentEnum_A\"",
          "start": 23,
          "end": 49
        },
        "start": 15,
        "end": 50
      },
      "importKind": "value",
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumE",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 66
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "optional": false,
            "computed": false,
            "start": 61,
            "end": 68
          },
          "definite": false,
          "start": 57,
          "end": 68
        }
      ],
      "declare": false,
      "start": 53,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumE",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "optional": false,
            "computed": false,
            "start": 78,
            "end": 85
          },
          "definite": false,
          "start": 74,
          "end": 85
        }
      ],
      "declare": false,
      "start": 70,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumE",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 100
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "optional": false,
            "computed": false,
            "start": 95,
            "end": 102
          },
          "definite": false,
          "start": 91,
          "end": 102
        }
      ],
      "declare": false,
      "start": 87,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
