__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 71,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 74,
      "end": 99,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 86,
        "decorators": [],
        "name": "Wrapper",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 89,
        "end": 98,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 89,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 98,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 162,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 145,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 150,
            "end": 160,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 159,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 121,
          "end": 128,
          "expression": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "Wrapper",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
