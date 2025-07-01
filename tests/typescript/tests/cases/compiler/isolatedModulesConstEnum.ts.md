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
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 28
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FOO",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 41,
              "end": 42
            },
            "computed": false,
            "start": 35,
            "end": 42
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 51
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 54,
              "end": 55
            },
            "computed": false,
            "start": 48,
            "end": 55
          }
        ],
        "start": 29,
        "end": 57
      },
      "const": true,
      "declare": true,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 85
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 99
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 114
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 118
              },
              "optional": false,
              "computed": false,
              "start": 105,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 128
          }
        ],
        "start": 69,
        "end": 130
      },
      "declare": false,
      "start": 59,
      "end": 131
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 132
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 40
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 55
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 59
              },
              "optional": false,
              "computed": false,
              "start": 46,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 69
          }
        ],
        "start": 10,
        "end": 71
      },
      "declare": false,
      "start": 0,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
