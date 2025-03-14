exportAssignmentEnum_A.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 10,
            "end": 11,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 19,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 24,
      "end": 35,
      "expression": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
exportAssignmentEnum_B.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "EnumE",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 50,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 49,
          "raw": "\"./exportAssignmentEnum_A\"",
          "value": "./exportAssignmentEnum_A"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 61,
            "end": 68,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 66,
              "decorators": [],
              "name": "EnumE",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 85,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "EnumE",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 95,
            "end": 102,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 95,
              "end": 100,
              "decorators": [],
              "name": "EnumE",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "C",
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
