__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 13,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 54,
        "decorators": [],
        "name": "implements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 87,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 85,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 72,
                "decorators": [],
                "name": "package",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 74,
                "end": 83,
                "decorators": [],
                "name": "protected",
                "optional": false,
                "typeAnnotation": null
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
      "start": 88,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 100,
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 101,
        "end": 104,
        "members": []
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 105,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 114,
        "end": 154,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 120,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 126,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 139,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 139,
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 145,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 152,
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 156,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 174,
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 175,
        "end": 215,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 181,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 193,
            "end": 200,
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 200,
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 206,
            "end": 213,
            "id": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 217,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 231,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 232,
        "end": 272,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 238,
            "end": 244,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 250,
            "end": 257,
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 257,
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 263,
            "end": 270,
            "id": {
              "type": "Identifier",
              "start": 263,
              "end": 270,
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
