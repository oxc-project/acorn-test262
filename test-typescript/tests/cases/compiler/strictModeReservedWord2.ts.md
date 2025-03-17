__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 274,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 14,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 30,
        "name": "public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 34,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 55,
        "name": "implements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 62,
            "end": 86,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 66,
                "end": 73,
                "name": "package",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 75,
                "end": 84,
                "name": "protected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 89,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "name": "package",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 102,
        "end": 105,
        "members": []
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 106,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 121,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 133,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 140,
            "name": "private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 146,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "name": "pacakge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 115,
        "end": 155,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 121,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 133,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 140,
              "name": "private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 146,
            "end": 153,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 153,
              "name": "pacakge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 157,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 175,
        "name": "private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 182,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 194,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 201,
            "name": "private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 207,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 214,
            "name": "pacakge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 176,
        "end": 216,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 182,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 194,
            "end": 201,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "name": "private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 207,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 214,
              "name": "pacakge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 218,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 232,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 239,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 245,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 251,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 258,
            "name": "private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 264,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 271,
            "name": "pacakge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 233,
        "end": 273,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 239,
            "end": 245,
            "id": {
              "type": "Identifier",
              "start": 239,
              "end": 245,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 251,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 251,
              "end": 258,
              "name": "private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 264,
            "end": 271,
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 271,
              "name": "pacakge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
