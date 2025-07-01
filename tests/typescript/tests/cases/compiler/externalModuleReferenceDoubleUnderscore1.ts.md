__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "timezonecomplete",
        "raw": "'timezonecomplete'",
        "start": 15,
        "end": 33
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "basics",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "__timezonecomplete/basics",
                "raw": "\"__timezonecomplete/basics\"",
                "start": 64,
                "end": 91
              },
              "start": 56,
              "end": 92
            },
            "importKind": "value",
            "start": 40,
            "end": 93
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 120
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "basics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 129
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TimeUnit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 138
                },
                "start": 123,
                "end": 138
              },
              "importKind": "value",
              "start": 105,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 139
          }
        ],
        "start": 34,
        "end": 141
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "__timezonecomplete/basics",
        "raw": "'__timezonecomplete/basics'",
        "start": 158,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 212
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 229
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 232,
                      "end": 233
                    },
                    "computed": false,
                    "start": 223,
                    "end": 233
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Minute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 249
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 252,
                      "end": 253
                    },
                    "computed": false,
                    "start": 243,
                    "end": 253
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Hour",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 270,
                      "end": 271
                    },
                    "computed": false,
                    "start": 263,
                    "end": 271
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Day",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 287,
                      "end": 288
                    },
                    "computed": false,
                    "start": 281,
                    "end": 288
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Week",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 305,
                      "end": 306
                    },
                    "computed": false,
                    "start": 298,
                    "end": 306
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Month",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 321
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 324,
                      "end": 325
                    },
                    "computed": false,
                    "start": 316,
                    "end": 325
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Year",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 339
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 342,
                      "end": 343
                    },
                    "computed": false,
                    "start": 335,
                    "end": 343
                  }
                ],
                "start": 213,
                "end": 350
              },
              "const": false,
              "declare": false,
              "start": 199,
              "end": 350
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 192,
            "end": 350
          }
        ],
        "start": 186,
        "end": 352
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 143,
      "end": 352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
