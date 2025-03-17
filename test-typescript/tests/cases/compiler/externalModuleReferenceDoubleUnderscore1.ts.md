__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 141,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 141,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 40,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "basics",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 56,
              "end": 92,
              "expression": {
                "type": "Literal",
                "start": 64,
                "end": 91,
                "raw": "\"__timezonecomplete/basics\"",
                "value": "__timezonecomplete/basics"
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 139,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 105,
              "end": 139,
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 120,
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 123,
                "end": 138,
                "left": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 129,
                  "decorators": [],
                  "name": "basics",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 138,
                  "decorators": [],
                  "name": "TimeUnit",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 33,
        "raw": "'timezonecomplete'",
        "value": "timezonecomplete"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 352,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 186,
        "end": 352,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 350,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 199,
              "end": 350,
              "body": {
                "type": "TSEnumBody",
                "start": 213,
                "end": 350,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 223,
                    "end": 233,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 229,
                      "decorators": [],
                      "name": "Second",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 232,
                      "end": 233,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 243,
                    "end": 253,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 249,
                      "decorators": [],
                      "name": "Minute",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 252,
                      "end": 253,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 263,
                    "end": 271,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "decorators": [],
                      "name": "Hour",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 270,
                      "end": 271,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 281,
                    "end": 288,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "decorators": [],
                      "name": "Day",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 298,
                    "end": 306,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 302,
                      "decorators": [],
                      "name": "Week",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 305,
                      "end": 306,
                      "raw": "4",
                      "value": 4
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 316,
                    "end": 325,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "decorators": [],
                      "name": "Month",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 324,
                      "end": 325,
                      "raw": "5",
                      "value": 5
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 335,
                    "end": 343,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 339,
                      "decorators": [],
                      "name": "Year",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 342,
                      "end": 343,
                      "raw": "6",
                      "value": 6
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 204,
                "end": 212,
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 158,
        "end": 185,
        "raw": "'__timezonecomplete/basics'",
        "value": "__timezonecomplete/basics"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
