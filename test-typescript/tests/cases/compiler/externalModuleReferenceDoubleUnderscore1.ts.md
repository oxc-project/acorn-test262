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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 33,
        "value": "timezonecomplete",
        "raw": "'timezonecomplete'"
      },
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
              "name": "basics",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 56,
              "end": 92,
              "expression": {
                "type": "Literal",
                "start": 64,
                "end": 91,
                "value": "__timezonecomplete/basics",
                "raw": "\"__timezonecomplete/basics\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 139,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 105,
              "end": 139,
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 120,
                "name": "TimeUnit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 123,
                "end": 138,
                "left": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 129,
                  "name": "basics",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 138,
                  "name": "TimeUnit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 352,
      "id": {
        "type": "Literal",
        "start": 158,
        "end": 185,
        "value": "__timezonecomplete/basics",
        "raw": "'__timezonecomplete/basics'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 186,
        "end": 352,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 350,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 199,
              "end": 350,
              "id": {
                "type": "Identifier",
                "start": 204,
                "end": 212,
                "name": "TimeUnit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 223,
                  "end": 233,
                  "id": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 229,
                    "name": "Second",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 232,
                    "end": 233,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 243,
                  "end": 253,
                  "id": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 249,
                    "name": "Minute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 252,
                    "end": 253,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 263,
                  "end": 271,
                  "id": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 267,
                    "name": "Hour",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 270,
                    "end": 271,
                    "value": 2,
                    "raw": "2"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 281,
                  "end": 288,
                  "id": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 284,
                    "name": "Day",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 287,
                    "end": 288,
                    "value": 3,
                    "raw": "3"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 298,
                  "end": 306,
                  "id": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 302,
                    "name": "Week",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 305,
                    "end": 306,
                    "value": 4,
                    "raw": "4"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 316,
                  "end": 325,
                  "id": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 321,
                    "name": "Month",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 324,
                    "end": 325,
                    "value": 5,
                    "raw": "5"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 335,
                  "end": 343,
                  "id": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 339,
                    "name": "Year",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 342,
                    "end": 343,
                    "value": 6,
                    "raw": "6"
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 213,
                "end": 350,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 223,
                    "end": 233,
                    "id": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 229,
                      "name": "Second",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 232,
                      "end": 233,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 243,
                    "end": 253,
                    "id": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 249,
                      "name": "Minute",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 252,
                      "end": 253,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 263,
                    "end": 271,
                    "id": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "name": "Hour",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 270,
                      "end": 271,
                      "value": 2,
                      "raw": "2"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 281,
                    "end": 288,
                    "id": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "name": "Day",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "value": 3,
                      "raw": "3"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 298,
                    "end": 306,
                    "id": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 302,
                      "name": "Week",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 305,
                      "end": 306,
                      "value": 4,
                      "raw": "4"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 316,
                    "end": 325,
                    "id": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "name": "Month",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 324,
                      "end": 325,
                      "value": 5,
                      "raw": "5"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 335,
                    "end": 343,
                    "id": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 339,
                      "name": "Year",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 342,
                      "end": 343,
                      "value": 6,
                      "raw": "6"
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
