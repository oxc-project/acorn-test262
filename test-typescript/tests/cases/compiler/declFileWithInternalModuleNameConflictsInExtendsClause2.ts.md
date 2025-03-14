declFileWithInternalModuleNameConflictsInExtendsClause2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 45,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 45,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "Z",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 143,
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 143,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 141,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 76,
              "end": 141,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 101,
                "end": 141,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "W",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 95,
                  "end": 100,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 95,
                    "end": 100,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 95,
                      "end": 98,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 98,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "Z",
                      "optional": false
                    }
                  }
                }
              ],
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
        "type": "TSQualifiedName",
        "start": 55,
        "end": 62,
        "left": {
          "type": "TSQualifiedName",
          "start": 55,
          "end": 60,
          "left": {
            "type": "TSQualifiedName",
            "start": 55,
            "end": 58,
            "left": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 145,
      "end": 184,
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 184,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 166,
            "end": 182,
            "body": {
              "type": "TSModuleBlock",
              "start": 175,
              "end": 182,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 152,
        "end": 159,
        "left": {
          "type": "TSQualifiedName",
          "start": 152,
          "end": 157,
          "left": {
            "type": "TSQualifiedName",
            "start": 152,
            "end": 155,
            "left": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
