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
      "body": {
        "type": "TSEnumBody",
        "start": 29,
        "end": 57,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 42,
            "computed": false,
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
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 55,
            "computed": false,
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
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": true,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 28,
        "decorators": [],
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 59,
      "end": 131,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 69,
        "end": 130,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 99,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 76,
              "end": 89,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 85,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 86,
                "end": 89,
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 128,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 105,
              "end": 118,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 105,
                "end": 114,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 118,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            }
          }
        ]
      },
      "typeParameters": null
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 40,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 17,
              "end": 30,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 26,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "FOO",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 69,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 59,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 55,
                "decorators": [],
                "name": "EventName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            }
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
