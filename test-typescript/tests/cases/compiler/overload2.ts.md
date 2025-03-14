__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 10,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 10,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 11,
      "end": 21,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 21,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 46,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 44,
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 66,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 64,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 64,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 111,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 96,
          "end": 105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 105,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 99,
              "end": 105
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 124,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 125,
      "end": 145,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 139,
          "end": 143,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 143,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 143,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 146,
      "end": 166,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 159,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 160,
          "end": 164,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 163,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 212,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 212,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 206,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 206,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 200,
              "end": 206
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
