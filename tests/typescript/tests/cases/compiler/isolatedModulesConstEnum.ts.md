__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 28,
        "decorators": [],
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 29,
        "end": 57,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "FOO",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 41,
              "end": 42,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 54,
              "end": 55,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 59,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 69,
        "end": 130,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 99,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 76,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 85,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 86,
                "end": 89,
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 128,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 105,
              "end": 118,
              "object": {
                "type": "Identifier",
                "start": 105,
                "end": 114,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 118,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 40,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 17,
              "end": 30,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 26,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 69,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 59,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 55,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
