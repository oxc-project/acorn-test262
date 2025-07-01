__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 30,
        "end": 33
      },
      "declare": false,
      "start": 13,
      "end": 33
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "implements",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "package",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 72
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "protected",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 83
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 61,
            "end": 85
          }
        ],
        "start": 55,
        "end": 87
      },
      "declare": false,
      "start": 34,
      "end": 87
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 100
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 101,
        "end": 104
      },
      "const": false,
      "declare": false,
      "start": 88,
      "end": 104
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 113
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 126
            },
            "initializer": null,
            "computed": false,
            "start": 120,
            "end": 126
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 139
            },
            "initializer": null,
            "computed": false,
            "start": 132,
            "end": 139
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 152
            },
            "initializer": null,
            "computed": false,
            "start": 145,
            "end": 152
          }
        ],
        "start": 114,
        "end": 154
      },
      "const": false,
      "declare": false,
      "start": 105,
      "end": 154
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 174
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
            },
            "initializer": null,
            "computed": false,
            "start": 181,
            "end": 187
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 200
            },
            "initializer": null,
            "computed": false,
            "start": 193,
            "end": 200
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 213
            },
            "initializer": null,
            "computed": false,
            "start": 206,
            "end": 213
          }
        ],
        "start": 175,
        "end": 215
      },
      "const": true,
      "declare": false,
      "start": 156,
      "end": 215
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 231
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 244
            },
            "initializer": null,
            "computed": false,
            "start": 238,
            "end": 244
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 257
            },
            "initializer": null,
            "computed": false,
            "start": 250,
            "end": 257
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 270
            },
            "initializer": null,
            "computed": false,
            "start": 263,
            "end": 270
          }
        ],
        "start": 232,
        "end": 272
      },
      "const": true,
      "declare": false,
      "start": 217,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
